import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <View
            style={{
                flexDirection: "row",
                alignSelf: "center",
            }}
        >
            {/* Header Button */}
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {/* Header Button */}
        </View>
    );
}

const HeaderButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor:
                    props.text === props.activeTab ? "black" : "white",
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
                marginTop: 30,
            }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text
                style={{
                    color: props.text === props.activeTab ? "white" : "black",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};
