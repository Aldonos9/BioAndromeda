import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Appbar, Text, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function DashboardScreen() {
    return (
        <>
            <Appbar.Header style={{ backgroundColor: "#00A896" }}>
                <Appbar.Content title="BioSoft Dashboard" titleStyle={{ color: "#fff" }} />
                <Appbar.Action icon="account-circle" color="#fff" onPress={() => { }} />
            </Appbar.Header>

            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: "#E0F7F5" },
                    tabBarActiveTintColor: "#007F8C",
                    tabBarIndicatorStyle: { backgroundColor: "#007F8C", height: 3 },
                }}
            >
                <Tab.Screen name="Inicio" component={InicioTab} />
                <Tab.Screen name="Equipos" component={EquiposTab} />
                <Tab.Screen name="Reportes" component={ReportesTab} />
            </Tab.Navigator>
        </>
    );
}

// 📊 --- CONTENIDO DE LAS PESTAÑAS ---

function InicioTab() {
    return (
        <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.sectionTitle}>Resumen General</Text>

            <View style={styles.row}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Icon name="hospital-building" size={40} color="#00A896" />
                        <Text style={styles.cardTitle}>Equipos activos</Text>
                        <Text style={styles.cardValue}>124</Text>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Icon name="wrench-clock" size={40} color="#00A896" />
                        <Text style={styles.cardTitle}>En mantenimiento</Text>
                        <Text style={styles.cardValue}>8</Text>
                    </Card.Content>
                </Card>
            </View>

            <View style={styles.row}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Icon name="alert-circle" size={40} color="#00A896" />
                        <Text style={styles.cardTitle}>Alertas críticas</Text>
                        <Text style={styles.cardValue}>3</Text>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Icon name="calendar-check" size={40} color="#00A896" />
                        <Text style={styles.cardTitle}>Mantenimientos hoy</Text>
                        <Text style={styles.cardValue}>5</Text>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
}

function EquiposTab() {
    return (
        <View style={styles.center}>
            <Text>Listado de equipos biomédicos 🧠</Text>
        </View>
    );
}

function ReportesTab() {
    return (
        <View style={styles.center}>
            <Text>Reportes y estadísticas 📈</Text>
        </View>
    );
}

// 🎨 --- ESTILOS ---

const styles = StyleSheet.create({
    content: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#007F8C",
        marginBottom: 15,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    card: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 15,
        backgroundColor: "#F9FFFD",
        elevation: 3,
    },
    cardTitle: {
        color: "#007F8C",
        fontSize: 14,
        marginTop: 8,
    },
    cardValue: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#00A896",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
<View style={styles.logoCircle}>
              <Icon name="heart-pulse" size={55} color="#00A896" />
            </View> 