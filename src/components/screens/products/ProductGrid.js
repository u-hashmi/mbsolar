import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography, alpha } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useTheme } from "@emotion/react";

const ProductGrid = ({ products, productsPerPage, onCardClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let currentProducts = [];
  const theme = useTheme();
  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  if (products.length > 0) {
    currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  }

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const converToImage = (binaryImage) => {
    if (binaryImage) {
      return `data:image/jpeg;base64,${binaryImage}`;
    }
  };

  const renderCardItems = () => {
    return currentProducts.map((product) => (
      <Grid item key={product.itemId} xs={12} sm={6} md={4} lg={2}>
        <Card
          sx={{
            p: 2,
            "&:hover": {
              border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
              boxShadow: `0 0 10px 0 ${alpha(theme.palette.primary.main, 0.5)}`,
              cursor: "pointer",
            },
          }}
          variant="outlined"
          onClick={() => onCardClick(product)}
        >
          <CardMedia
            component="img"
            alt="Product Image"
            height={160}
            image={converToImage(product.binaryImage)}
            sx={{ borderRadius: 1 }}
          />
          <CardContent sx={{ p: 0, pt: 2, height: 110 }}>
            <Box>
              <Typography variant="subtitle1" sx={{ lineHeight: 0.5 }}>
                {product.itemName}
              </Typography>
              <Typography variant="caption">{product.itemDescription}</Typography>
            </Box>
            <Divider orientation="horizontal" flexItem />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="caption">Pricing</Typography>
                <Typography variant="body2" sx={{ gap: 2 }}>
                  PKRS {product.itemPrice.toFixed(2)}/{product.selectedUnit}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption">Quantity</Typography>
                <Box
                  sx={{
                    borderRadius: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Typography variant="body2">{product.itemQuantity}</Typography>
                </Box>
              </Box>
            </Box>
            <Typography
              variant="body"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              PRODUCTID-{product.itemId}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <Box sx={{ height: 500 }}>
      <Divider orientation="horizontal" flexItem />
      <Grid container spacing={2} sx={{ pt: 2, pb: 2, height: 670 }}>
        {currentProducts.length > 0 ? (
          renderCardItems()
        ) : (
          <Box
            sx={{ display: "flex", flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: "center", alignContent: "center" }}
          >
            <img height={400} src={require("../../../assets/icons/noProducts.png")} alt="No Products" style={{opacity: 0.2}}/>
            
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
              }}
            >
              No products found
            </Typography>
          </Box>
        )}
      </Grid>
      <Divider orientation="horizontal" flexItem />
      <Pagination
        count={Math.ceil(products.length / productsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        variant="outlined"
        shape="rounded"
        size="large"
        sx={{ display: "flex", justifyContent: "center", pt: 2, pb: 2 }}
      />
    </Box>
  );
};

export default ProductGrid;
