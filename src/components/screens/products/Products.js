import { useEffect, useState } from "react";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, CircularProgress, Menu, MenuItem, Typography, alpha } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../../global/CustomComponents";
import { SearchIcon, CancelIcon, AddBoxIcon, AllItems, DropDown } from "../../global/IconProvider";
import ProductGrid from "./ProductGrid";
import { useNavigate } from "react-router-dom";
import { fetchProductData } from "../../data/databaseCalls";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState("All");
  const [sorting, setSorting] = useState("itemName");
  const [allData, setAllData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();
  const productsPerPage = 12;
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    switch (e.target.textContent) {
      case "Id":
        setSorting("itemId");
        break;
      case "Name":
        setSorting("itemName");
        break;
      case "Description":
        setSorting("itemDescription");
        break;
      default:
        setSorting("itemName");
    }
    setAnchorEl(null);
  };

  const handleSearch = (e) => {
    setSearchText(searchText);
    setFilters(searchText);
  };

  const handleClear = () => {
    setSearchText("");
    setFilters("All");
  };

  const handleBlur = () => {
    handleSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchText === "") {
      setFilters("All");
    }
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProductData(filters, sorting);
        setAllData(data);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters, sorting, searchText]);

  const handleCreateProductClick = (e) => {
    e.preventDefault();
    navigate("/products/entry", { state: { key: "PRODUCTS", oldItem: null } });
  };

  const handleProductEditClick = (product) => {
    navigate("/products/entry", { state: { key: "PRODUCTS", oldItem: product } });
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    setFilters(e.target.value);
  };

  return (
    <Box sx={{ gap: 1, display: "flex", width: "100%", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6">Products</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            sx={{ gap: 1, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "none" }}
            onClick={handleCreateProductClick}
          >
            <AddBoxIcon />
            <Typography variant="subtitle" sx={{ textTransform: "none", mt: 0.4 }}>
              Create Product
            </Typography>
          </Button>

          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchText}
                onChange={handleSearchTextChange}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
              />
            </Search>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          {searchText && (
            <Button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: alpha(theme.palette.primary.tertiary, 0.8),
                gap: 1,
                pl: 2,
                pr: 2,
              }}
              onClick={handleClear}
            >
              <Typography sx={{ textAlign: "center", textTransform: "none", color: theme.palette.primary.dark }}>
                {searchText}
              </Typography>
              <CancelIcon sx={{ color: theme.palette.primary.dark }} />
            </Button>
          )}
          <Button variant="outlined" sx={{ gap: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <AllItems />
            <Typography variant="subtitle" sx={{ textTransform: "none", mt: 0.4 }}>
              All
            </Typography>
          </Button>

          <div>
            <Button
              variant="outlined"
              onClick={handleClick}
              sx={{ gap: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <Typography variant="subtitle" sx={{ textTransform: "none", mt: 0.4 }}>
                Sort
              </Typography>
              <DropDown />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Id</MenuItem>
              <MenuItem onClick={handleClose}>Name</MenuItem>
              <MenuItem onClick={handleClose}>Description</MenuItem>
            </Menu>
          </div>
        </Box>
      </Box>

      <Box>
      {loading ? (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 636, gap: 2}}>
          <CircularProgress />
          <Typography variant="h5">Loading...</Typography>
        </Box>
        ) : (
          <ProductGrid
            products={allData}
            productsPerPage={productsPerPage}
            onCardClick={handleProductEditClick}
            filters={searchText}
          />
        )}
      </Box>
    </Box>
  );
};

export default Products;
