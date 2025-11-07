// styles.js
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    // Úsalo como contentContainerStyle en un <ScrollView />
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 24,
    },

    centeredContainer: {
        width: '100%',
        alignItems: 'center',
    },

    brandRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },

    brandText: {
        color: '#dbeafe',
        fontWeight: '700',
        marginLeft: 8,
        fontSize: 16,
        letterSpacing: 0.5,
    },

    glassCard: {
        width: '100%',
        maxWidth: 440,
        alignSelf: 'center',

        // Reemplazo de #ffffff12 y #ffffff22 por rgba (compatible iOS/Android)
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.13)',

        borderRadius: 16,
        padding: 20,

        // Sombra iOS
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 10 },

        // Sombra Android
        elevation: 10,
    },

    title: {
        color: '#e5e7eb',
        fontSize: 22,
        fontWeight: '800',
        marginBottom: 4,
    },

    subtitle: {
        color: '#9fb3c8',
        fontSize: 14,
        marginBottom: 16,
    },

    label: {
        color: '#b6c2cf',
        fontSize: 13,
        marginBottom: 8,
    },

    // Grosor del borde "neón" alrededor del input si usas un LinearGradient
    inputGradient: {
        borderRadius: 14,
        padding: 2, // evita medias unidades para un render más nítido
    },

    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0d162b',
        borderRadius: 12,
        height: 48,
    },

    inputIcon: {
        paddingHorizontal: 12,
    },

    textInput: {
        flex: 1,
        color: '#e5e7eb',
        fontSize: 16,
        paddingVertical: 10,
        // paddingHorizontal: 0 // agrégalo si lo necesitas
    },

    errorText: {
        color: '#f87171',
        marginTop: 6,
        fontSize: 13,
    },

    helperRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },

    helper: {
        color: '#9fb3c8',
        marginRight: 6,
    },

    link: {
        color: '#00e5ff',
        fontWeight: '700',
    },

    ctaButton: {
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 6,
        height: 48,
    },

    ctaDisabled: {
        opacity: 0.7,
    },

    ctaGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ctaText: {
        color: '#ffffff',
        fontWeight: '800',
        fontSize: 16,
        letterSpacing: 0.4,
    },

    homeHello: {
        color: '#c7d2fe',
        fontSize: 16,
        marginTop: 8,
        textAlign: 'center',
    },

    // Nota: añade top/left/right/bottom según dónde quieras posicionarlo.
    // Si no le das backgroundColor o un gradient hijo, no se verá.
    blob: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 100,
        opacity: 0.3,
        transform: [{ scale: 1.5 }],
        // backgroundColor: '#6ee7b7' // ejemplo
        // pointerEvents: 'none' // útil si es decorativo
    },
});

export default styles;