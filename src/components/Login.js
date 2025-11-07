import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    Dimensions,
    Animated,
    Easing,
    ScrollView,
    useWindowDimensions,
    Image,
    Alert,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from "../styles/styleLogin.js";
import logo from 'assets/BioA.png'; // ajusta la ruta si es distinta


// SIMULACIÓN de login a un backend.
// Reemplaza esta función por tu llamada real a la API cuando la tengas.
const simulateLogin = (email, password) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'demo@demo.com' && password === '123456') {
                resolve({ token: 'fake-token', user: { name: 'Neo', email } });
            } else {
                reject(new Error('Credenciales inválidas'));
            }
        }, 1200);
    });

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function App() {
    const [session, setSession] = useState(null);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0a0f1f' }}>
            <StatusBar barStyle="light-content" />
            <FuturisticBackground />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{ flex: 1 }}
            >
                {!session ? (
                    <LoginScreen onSuccess={setSession} />
                ) : (
                    <HomeScreen user={session.user} onLogout={() => setSession(null)} />
                )}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

function LoginScreen({ onSuccess }) {
    const { height } = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '', general: '' });

    const validate = () => {
        const next = { email: '', password: '', general: '' };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!email.trim()) next.email = 'El correo es obligatorio';
        else if (!emailRegex.test(email.trim())) next.email = 'Correo no válido';

        if (!password) next.password = 'La contraseña es obligatoria';
        else if (password.length < 6) next.password = 'Mínimo 6 caracteres';

        setErrors(next);
        return !next.email && !next.password;
    };

    const handleSubmit = async () => {
        if (!validate()) return;
        setLoading(true);
        setErrors((e) => ({ ...e, general: '' }));
        try {
            const result = await simulateLogin(email.trim(), password);
            onSuccess(result);
        } catch (e) {
            setErrors((prev) => ({ ...prev, general: e?.message || 'Error al iniciar sesión' }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView
            contentContainerStyle={[styles.scrollContainer, { minHeight: height }]}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.centeredContainer}>
                <View style={styles.brandRow}>
                    <LinearGradient
                        colors={['#7f5af0', '#00e5ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[styles.brandLogoRing, { width: 72, height: 72, borderRadius: 36 }]}
                    >
                        <Image source={logo} style={{ width: 68, height: 68, borderRadius: 34 }} />
                    </LinearGradient>
                </View>

                <LinearGradient colors={['#ffffff10', '#ffffff08']} style={styles.glassCard}>
                    <Text style={styles.title}>Iniciar sesión</Text>
                    <Text style={styles.subtitle}>Conéctate al futuro</Text>

                    {/* Email */}
                    <InputField
                        label="Correo electrónico"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="tu@correo.com"
                        icon={<Ionicons name="mail-outline" size={20} color="#9fb3c8" />}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        error={errors.email}
                        returnKeyType="next"
                    />

                    {/* Password */}
                    <InputField
                        label="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Tu contraseña"
                        icon={<Ionicons name="lock-closed-outline" size={20} color="#9fb3c8" />}
                        secureTextEntry={!showPass}
                        autoCapitalize="none"
                        error={errors.password}
                        returnKeyType="done"
                        onSubmitEditing={handleSubmit}
                        rightAccessory={
                            <TouchableOpacity onPress={() => setShowPass((v) => !v)} hitSlop={10}>
                                <Ionicons
                                    name={showPass ? 'eye-off-outline' : 'eye-outline'}
                                    size={20}
                                    color="#9fb3c8"
                                />
                            </TouchableOpacity>
                        }
                    />

                    {!!errors.general && <Text style={styles.errorText}>{errors.general}</Text>}

                    <TouchableOpacity
                        onPress={handleSubmit}
                        disabled={loading || !email || !password}
                        style={[styles.ctaButton, (loading || !email || !password) && styles.ctaDisabled]}
                        activeOpacity={0.9}
                    >
                        <LinearGradient
                            colors={['#00e5ff', '#7f5af0']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.ctaGradient}
                        >
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.ctaText}>Acceder</Text>
                                    <Ionicons
                                        name="arrow-forward-circle-outline"
                                        size={20}
                                        color="#fff"
                                        style={{ marginLeft: 8 }}
                                    />
                                </View>
                            )}
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={styles.helperRow}>
                        <Text style={styles.helper}>¿Olvidaste tu contraseña?</Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={styles.link}>Recuperar</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </ScrollView>
    );
}

function HomeScreen({ user, onLogout }) {
    const { height } = useWindowDimensions();

    return (
        <ScrollView contentContainerStyle={[styles.scrollContainer, { minHeight: height }]}>
            <View style={styles.centeredContainer}>
                <LinearGradient colors={['#ffffff10', '#ffffff08']} style={styles.glassCard}>
                    <Text style={styles.title}>Bienvenido</Text>
                    <Text style={styles.homeHello}>Hola, {user?.name || user?.email}</Text>
                    <TouchableOpacity onPress={onLogout} style={[styles.ctaButton, { marginTop: 24 }]}>
                        <LinearGradient
                            colors={['#7f5af0', '#00e5ff']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.ctaGradient}
                        >
                            <Text style={styles.ctaText}>Cerrar sesión</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </ScrollView>
    );
}

// Fondo animado y blobs neón
function FuturisticBackground() {
    const scanAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(scanAnim, {
                toValue: 1,
                duration: 7000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [scanAnim]);

    const translateX = scanAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
    });

    return (
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
            <LinearGradient
                colors={['#0a0f1f', '#0b1533', '#09122a']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={StyleSheet.absoluteFill}
            />

            {/* Blobs neón */}
            <View style={[styles.blob, { top: -60, left: -40, backgroundColor: '#00e5ff22' }]} />
            <View style={[styles.blob, { bottom: -80, right: -60, backgroundColor: '#7f5af022' }]} />

            {/* Barra de escaneo animada */}
            <Animated.View
                style={[
                    StyleSheet.absoluteFill,
                    {
                        opacity: 0.25,
                        transform: [{ translateX }],
                    },
                ]}
            >
                <LinearGradient
                    colors={['transparent', '#00e5ff33', 'transparent']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
                />
            </Animated.View>
        </View>
    );
}

// Campo de entrada con borde neón y accesorio derecho opcional
function InputField({
    label,
    value,
    onChangeText,
    placeholder,
    icon,
    secureTextEntry,
    keyboardType,
    autoCapitalize,
    error,
    rightAccessory,
    returnKeyType,
    onSubmitEditing,
}) {
    const [focused, setFocused] = useState(false);

    // Colores del borde (gradiente) según foco
    const gradientColors = useMemo(
        () => (focused ? ['#00e5ff', '#7f5af0'] : ['#1f2937', '#1f2937']),
        [focused]
    );

    return (
        <View style={{ marginBottom: 14 }}>
            <Text style={styles.label}>{label}</Text>

            {/* Borde gradiente */}
            <LinearGradient colors={gradientColors} style={styles.inputGradient}>
                <View style={styles.inputRow}>
                    <View style={styles.inputIcon}>{icon}</View>
                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        placeholderTextColor="#93a4b5"
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        autoCapitalize={autoCapitalize}
                        style={styles.textInput}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        returnKeyType={returnKeyType}
                        onSubmitEditing={onSubmitEditing}
                    />
                    {!!rightAccessory && <View style={{ paddingHorizontal: 10 }}>{rightAccessory}</View>}
                </View>
            </LinearGradient>

            {!!error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

