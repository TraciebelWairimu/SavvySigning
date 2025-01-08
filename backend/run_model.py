import tensorflow as tf
import numpy as np
import cv2
from object_detection.utils import label_map_util, visualization_utils as viz_utils
import os

# Paths
MODEL_DIR = r"C:\Users\TraciebelKinyari\Savvy_Signing\backend\saved_model"
LABEL_MAP_PATH = (
    r"C:\Users\TraciebelKinyari\Savvy_Signing\backend\label_map.pbtxt"
)
# ANNOTATION_PATH = "Tensorflow/workspace/annotations"

# Load the model
print("Loading model...")
detect_fn = tf.saved_model.load(MODEL_DIR)
print("Model loaded successfully.")

# Load label map
print("Loading label map...")
category_index = label_map_util.create_category_index_from_labelmap(
    LABEL_MAP_PATH, use_display_name=True
)

# Setup capture
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)  # Use the default webcam
# history = []  # To store detection history
if not cap.isOpened():
    print("Error: Could not open video capture.")
    exit()
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

print("Starting video stream... Press 'q' to exit.")

while True:
    ret, frame = cap.read()
    if not ret:
        print("Failed to capture frame. Exiting...")
        break

    # Convert the frame for TensorFlow model
    image_np = np.array(frame, dtype=np.uint8)
    input_tensor = tf.convert_to_tensor(np.expand_dims(image_np, 0), dtype=tf.uint8)

    # Perform detection
    detections = detect_fn(input_tensor)

    num_detections = int(detections.pop("num_detections"))
    detections = {
        key: value[0, :num_detections].numpy() for key, value in detections.items()
    }
    detections["num_detections"] = num_detections
    detections["detection_classes"] = detections["detection_classes"].astype(np.int64)

    # Visualize the detection results on the frame
    label_id_offset = 1
    image_np_with_detections = image_np.copy()
    viz_utils.visualize_boxes_and_labels_on_image_array(
        image_np_with_detections,
        detections["detection_boxes"],
        detections["detection_classes"] + label_id_offset,
        detections["detection_scores"],
        category_index,
        use_normalized_coordinates=True,
        max_boxes_to_draw=5,
        min_score_thresh=0.7,
        agnostic_mode=False,
    )

    # Show the frame with detections
    cv2.imshow(
        "Translate SL into text", cv2.resize(image_np_with_detections, (800, 600))
    )

    # # Capture detection history
    # if (
    #     detections["detection_scores"].size > 0
    #     and np.max(detections["detection_scores"]) > 0.5
    # ):
    #     word = category_index[
    #         detections["detection_classes"][np.argmax(detections["detection_scores"])]
    #         + 1
    #     ]["name"]
    #     history.append(word)

    # Exit loop on pressing 'q'
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()

# # Save the detection history (optional)
# history_file = "detection_history.txt"
# print(f"Saving detection history to {history_file}...")
# with open(history_file, "w") as f:
#     for item in history:
#         f.write(f"{item}\n")
# print("Detection history saved.")
