import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Appbar, Text, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function InicioTab() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.sectionTitle}>Resumen General</Text>

      <View style={styles.row}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.logoCircle}>
              <Icon name="heart-pulse" size={32} color="#00A896" />
            </View>
            <View>
              <Text style={styles.cardTitle}>Equipos activos</Text>
              <Text style={styles.cardValue}>124</Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.logoCircle}>
              <Icon name="wrench-clock" size={32} color="#00A896" />
            </View>
            <View>
              <Text style={styles.cardTitle}>En mantenimiento</Text>
              <Text style={styles.cardValue}>8</Text>
            </View>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.row}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.logoCircle}>
              <Icon name="alert-circle" size={32} color="#00A896" />
            </View>
            <View>
              <Text style={styles.cardTitle}>Alertas críticas</Text>
              <Text style={styles.cardValue}>3</Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.logoCircle}>
              <Icon name="calendar-check" size={32} color="#00A896" />
            </View>
            <View>
              <Text style={styles.cardTitle}>Mantenimientos hoy</Text>
              <Text style={styles.cardValue}>5</Text>
            </View>
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

export default function DashboardScreen() {
  return (
    <>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="BioSoft Dashboard" titleStyle={styles.appBarTitle} />
        <Appbar.Action icon="account-circle" color="#fff" onPress={() => { }} />
      </Appbar.Header>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: "#007F8C",
          tabBarIndicatorStyle: styles.tabIndicator,
        }}
      >
        <Tab.Screen name="Inicio" component={InicioTab} />
        <Tab.Screen name="Equipos" component={EquiposTab} />
        <Tab.Screen name="Reportes" component={ReportesTab} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#00A896",
  },
  appBarTitle: {
    color: "#fff",
  },
  tabBar: {
    backgroundColor: "#E0F7F5",
  },
  tabIndicator: {
    backgroundColor: "#007F8C",
    height: 3,
  },
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
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E0F7F5",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    color: "#007F8C",
    fontSize: 14,
    marginBottom: 4,
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
