import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localResturants = [
    {
        name: "Beachside Bar",
        imageUrl:
            "https://i.pinimg.com/474x/8d/3e/40/8d3e408a28ce796ec66df4d302f21e0b--swinging-chair-beach-bars.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Amazing Dragon",
        imageUrl:
            "https://cdn.lifestyleasia.com/wp-content/uploads/2019/12/04175513/SAZ-The-American-Brasserie.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Gril",
        imageUrl:
            "https://i.pinimg.com/474x/8d/3e/40/8d3e408a28ce796ec66df4d302f21e0b--swinging-chair-beach-bars.jpg",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 5,
    },
    {
        name: "Beachside Bar",
        image_url:
            "https://i.pinimg.com/474x/8d/3e/40/8d3e408a28ce796ec66df4d302f21e0b--swinging-chair-beach-bars.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.9,
    },
];

export default function ResturantItems(props) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{
                marginBottom: 30,
            }}
        >
            {props.resturantData.map((resturant, index) => (
                <View
                    key={index}
                    style={{
                        marginTop: 10,
                        padding: 15,
                        backgroundColor: "white",
                    }}
                >
                    <ResturantImage image={resturant.image_url} />
                    {/* ResInfo */}
                    <ResturantInfo
                        name={resturant.name}
                        rating={resturant.rating}
                    />
                </View>
            ))}
        </TouchableOpacity>
    );
}

const ResturantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image,
            }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons
                name="heart-outline"
                size={25}
                color="white"
            />
        </TouchableOpacity>
    </>
);
const ResturantInfo = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {props.name}
            </Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30-45 . min</Text>
        </View>
        <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
);
