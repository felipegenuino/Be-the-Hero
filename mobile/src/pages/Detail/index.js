import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import logoImg from '../../pages/assets/logo.png';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

export default function Detail(){
    const navigation = useNavigation();
    const message = 'Olá {ong}, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropela" com o valor de R$ 120,00'

    function navigationBack(){
        navigation.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Heroi do caso: Cadelinha atropelada',
            recipients: ['guntaurus@gmail.com'],
            body: message,
        })
    }
    function sendWhatsapp(){}


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident} >
                    <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAE São José</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View> 
            <View style={styles.contactBox}>
                <Text  style={styles.heroTitle}>Salve o dia!</Text>
                <Text  style={styles.heroTitle}>Seja o herói desse caso. </Text>
                <Text  style={styles.heroDescription}>Entre em contato</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={()=> {}}> 
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}> 
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View> 
    )
}