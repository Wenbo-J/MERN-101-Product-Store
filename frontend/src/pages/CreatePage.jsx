import { Box, Container, Heading, VStack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
    [ newProduct, setNewProduct ] = useState({
        name: "",
        price: "",
        image: ""
    });
    return <Container maxW={"container-sm"}>
        <VStack spacing={8}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                Create New Product
            </Heading>

            <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                <VStack spacing={4}>
                    <Input placeholder="Product Name" name="name" value={newProduct.name}
                    onChange={() => {setNewProduct(n)}}/>
                </VStack>
            </Box>
        </VStack>
    </Container>;
};

export default CreatePage;