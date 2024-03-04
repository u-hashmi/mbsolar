import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardMedia, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const ImageDropzone = ({ onImagesDrop }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const imagePromises = acceptedFiles.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.readAsArrayBuffer(file);
        });
      });

      Promise.all(imagePromises).then((binaryImages) => {
        onImagesDrop(binaryImages);
      });
    },
    [onImagesDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const theme = useTheme();
  return (
    <Card sx={{ p: 2, m: 2, flex: 1, display: "flex", width: 500, justifyContent: "center" }} variant="none">
      <Card
        {...getRootProps()}
        variant="none"
        sx={{
          border: "1px dashed #c8c8c8",
          borderRadius: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          p: 2,
          textAlign: "center",
          transition: "border 0.3s ease",
          ...(isDragActive && { border: "1px dashed #007bff" }),
          "&:hover": {
            border: `1px dashed ${theme.palette.primary.main}`,
          },
        }}
      >
        <input {...getInputProps()} />

        <CardMedia
          component="img"
          alt="Product Image"
          src={require("../../assets/icons/uploadIcon.png")}
          altImage="https://via.placeholder.com/150"
          height={250}
          sx={{ borderRadius: 1 }}
        />
        <Typography variant="title">Upload Product Image</Typography>
        <Typography variant="caption" color="textSecondary">
          Drag and drop images here, or click to select images.
        </Typography>
      </Card>
    </Card>
  );
};

export default ImageDropzone;
