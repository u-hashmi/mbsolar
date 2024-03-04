import {
  Box,
  Button,
  Card,
  CardMedia,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { arrayBufferToBase64, base64ToArrayBuffer } from "../../global/CommonFunctions";
import ImageDropzone from "../../global/ImageDropZone";
import { deleteProductData, saveProductData, updateProductData } from "../../data/databaseCalls";

const CreateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { oldItem } = location.state || {};

  if (oldItem?.binaryImage && typeof oldItem.binaryImage === "string") {
    oldItem.binaryImage = base64ToArrayBuffer(oldItem.binaryImage);
  }

  const [item, setItem] = useState({
    itemName: oldItem?.itemName || "",
    itemDescription: oldItem?.itemDescription || "",
    itemPrice: oldItem?.itemPrice || 0,
    itemQuantity: oldItem?.itemQuantity || 0,
    selectedUnit: oldItem?.selectedUnit || "ft",
    binaryImage: oldItem?.binaryImage || "",
  });

  const handleImagesDrop = (binaryDataArray) => {
    setItem({ ...item, binaryImage: binaryDataArray[0] });
  };

  const handleCancel = () => {
    navigate("/products");
  };

  const handleSaveItem = async () => {
    item.binaryImage =
      item.binaryImage instanceof ArrayBuffer ? arrayBufferToBase64(item.binaryImage) : item.binaryImage;
    item.itemName = item.itemName === "" ? "No Name" : item.itemName.trim();
    item.itemDescription = item.itemDescription === "" ? "No Description" : item.itemDescription.trim();
    if (oldItem?.itemId) {
      item.itemId = oldItem.itemId;
      await updateProductData(item);
    } else {
      await saveProductData(item);
    }
    navigate("/products");
  };

  const handleDelete = async () => {
    await deleteProductData(oldItem?.itemId);
    navigate("/products");
  };

  const renderImage = (binaryData, index) => {
    var imageSrc = binaryData;

    if (binaryData instanceof ArrayBuffer) {
      binaryData = arrayBufferToBase64(binaryData);
      imageSrc = `data:image/jpeg;base64,${binaryData}`;
    } else {
      imageSrc = binaryData;
    }
    return (
      <Card
        variant="none"
        sx={{ flex: 1, width: 500, justifyContent: "center", alignItems: "center", display: "flex", cursor: "pointer" }}
        onClick={() => {
          setItem({ ...item, binaryImage: "" });
        }}
      >
        <CardMedia
          component="img"
          alt="Product Image"
          image={imageSrc}
          sx={{ borderRadius: 1, height: 550, objectFit: "fit" }}
        />
      </Card>
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 10 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="text" onClick={() => navigate("/products")}>
          <Tooltip title="Back to Products Page" arrow>
            <Typography sx={{ textTransform: "none" }} variant="h5">
              Products /
            </Typography>
          </Tooltip>
        </Button>
        <Typography variant="h5">Create Product</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          pt: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
            gap: 2,
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.05)",
          }}
        >
          {item.binaryImage === "" ? (
            <ImageDropzone onImagesDrop={handleImagesDrop} />
          ) : (
            renderImage(item.binaryImage, 0)
          )}
        </Card>
        <Card
          variant="none"
          elevation={8}
          sx={{
            borderRadius: 2,
            display: "flex",
            flex: 1,
            flexDirection: "column",
            ml: 2,
            gap: 2,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Product Name"
            variant="filled"
            value={item.itemName}
            onChange={(e) => setItem({ ...item, itemName: e.target.value })}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Product Description"
            variant="filled"
            multiline
            rows={9}
            value={item.itemDescription}
            onChange={(e) => setItem({ ...item, itemDescription: e.target.value })}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="filled"
            value={item.itemPrice}
            onChange={(e) => setItem({ ...item, itemPrice: e.target.value })}
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">PKRS</InputAdornment>,
            }}
            onFocus={(e) => e.target.select()}
            fullWidth
          />

          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="filled"
            value={item.itemQuantity}
            onChange={(e) => setItem({ ...item, itemQuantity: e.target.value })}
            type="number"
            onFocus={(e) => e.target.select()}
            fullWidth
          />

          <FormControl fullWidth>
            <FormLabel id="demo-radio-buttons-group-label">Pricing Unit</FormLabel>
            <RadioGroup
              aria-labelledby="aria-price-units-group"
              defaultValue="ft"
              name="price-units-group"
              row
              value={item.selectedUnit}
              onClick={(e) => setItem({ ...item, selectedUnit: e.target.value })}
            >
              <FormControlLabel value="ft" control={<Radio />} label="ft" />
              <FormControlLabel value="ft²" control={<Radio />} label="ft²" />
              <FormControlLabel value="m" control={<Radio />} label="m" />
              <FormControlLabel value="ct" control={<Radio />} label="ct" />
              <FormControlLabel value="in" control={<Radio />} label="in" />
              <FormControlLabel value="cm" control={<Radio />} label="cm" />
            </RadioGroup>
          </FormControl>
        </Card>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          <Typography variant="subtitle1" sx={{ textTransform: "none" }}>
            Delete
          </Typography>
        </Button>
        <Button variant="outlined" onClick={handleCancel}>
          <Typography variant="subtitle1" sx={{ textTransform: "none" }}>
            Cancel
          </Typography>
        </Button>
        <Button variant="contained" onClick={handleSaveItem}>
          <Typography variant="subtitle1" sx={{ textTransform: "none" }}>
            Save
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CreateProduct;
