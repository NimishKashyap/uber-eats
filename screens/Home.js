import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import ResturantItems, { localResturants } from "../components/ResturantItems";

const YELP_API_KEY =
    "-PNfCFt3mwHRcA-uciV0e7ev8gNsGRNTpYXU5x-LZx0TZlgQtFivhmkxoywAOgHM_AIVpazGA_9EdJAqNb4882Za-dp0bvOZFBr0gSxeQEo8fao4Y30CtyRgFiZKYXYx";

export default function Home() {
    const [resturantData, setResturantData] = useState(localResturants);

    const getResturantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=resturants&location=NewYork`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
                "Access-Control-Allow-Origin": "*",
            },
        };
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setResturantData(json.businesses));
    };
    useEffect(() => {
        getResturantsFromYelp();
    }, []);
    return (
        <View style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ResturantItems resturantData={resturantData} />
            </ScrollView>
        </View>
    );
}
