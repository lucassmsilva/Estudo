import React from "react";
import { View, Text, Image } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcons";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";

export function SignIn() {
  return (
    <View style={styles.container}>
     

      <Image 
      source={IllustrationImg} 
      style={styles.image} 
      resizeMode = "stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
         Conecte-se {`\n`}
          E organize suas {`\n`}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos pra jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title='Entrar com o discord' />
      
      </View>
    </View>
  );
}
