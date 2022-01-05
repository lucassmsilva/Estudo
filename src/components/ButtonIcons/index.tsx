import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

type props = {
    title: string;
}

export function ButtonIcon({ title } :props) {
  return (
    <TouchableOpacity style = {styles.container} activeOpacity={0}>
      <View style = {styles.iconWrapper}>
        <Image source = {DiscordImg} style = {styles.icon} />
      </View>

      <Text style={styles.title}>{ title }</Text>
    </TouchableOpacity>
  );
}
