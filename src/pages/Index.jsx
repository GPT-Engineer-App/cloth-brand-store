// Complete the Index page component for a clothing brand ecommerce store
import { Box, Flex, Grid, Heading, Image, Text, Button, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Casual T-Shirt",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1525171254930-643fc658b64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjB0LXNoaXJ0fGVufDB8fHx8MTcxNDE1MjU4NHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Formal Shirt",
      price: "$45.99",
      image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBzaGlydHxlbnwwfHx8fDE3MTQxNTI1ODR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Denim Jeans",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zfGVufDB8fHx8MTcxNDE1MjU4NHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 4,
      name: "Leather Jacket",
      price: "$120.00",
      image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0fGVufDB8fHx8MTcxNDE1MjU4NXww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl">
          Clothing Store
        </Heading>
        <HStack spacing={4}>
          <IconButton icon={<FaSearch />} aria-label="Search" />
          <IconButton icon={<FaHeart />} aria-label="Favorites" />
          <IconButton icon={<FaShoppingCart />} aria-label="Cart" />
        </HStack>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={5} alignItems="flex-start">
              <Text fontWeight="bold" fontSize="lg">
                {product.name}
              </Text>
              <Text fontSize="md" color="gray.500">
                {product.price}
              </Text>
              <Button colorScheme="blue" size="sm">
                Add to Cart
              </Button>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
