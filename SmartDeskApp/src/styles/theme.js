// src/style/theme.js
import { StyleSheet } from 'react-native';

// Cores do Tema Light (Design Moderno e Suave)
export const colors = {
    BACKGROUND: '#F8FAFC',           // Branco azulado muito suave
    CARD_BACKGROUND: '#FFFFFF',      // Branco puro para cards
    TEXT_PRIMARY: '#1E293B',         // Azul escuro quase preto
    TEXT_SECONDARY: '#64748B',       // Cinza azulado médio
    ALERT: '#DC2626',                // Vermelho suave mas visível
    SUCCESS: '#059669',              // Verde esmeralda
    SHADOW: '#000000',               // Sombra
    BORDER: '#E2E8F0',               // Borda cinza muito clara
    ACCENT: '#3B82F6',               // Azul vibrante
    WARNING: '#F59E0B',              // Âmbar para alertas médios
    GRADIENT_START: '#3B82F6',       // Gradiente moderno
    GRADIENT_END: '#1D4ED8',         // Gradiente moderno
};

// Estilos Componentizados para a Tela Dashboard
export const dashboardStyles = StyleSheet.create({
    // NOVO: Container de scroll
    scrollContainer: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
    },
    // Container principal atualizado para scroll
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
        paddingBottom: 40,
        backgroundColor: colors.BACKGROUND,
        width: '100%',
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: colors.TEXT_PRIMARY,
        letterSpacing: -0.5,
        marginBottom: 15,
        textAlign: 'center',
        textShadowColor: 'rgba(30, 41, 59, 0.1)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
        marginTop: 10,
    },
    indicatorsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '95%',
        marginVertical: 20,
        paddingVertical: 25,
        paddingHorizontal: 10,
        backgroundColor: colors.CARD_BACKGROUND,
        borderRadius: 24,
        
        // Sombra moderna
        shadowColor: colors.SHADOW,
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 8 },
        elevation: 12,
        borderWidth: 1,
        borderColor: 'rgba(226, 232, 240, 0.8)',
    },
    // Caixa de Alerta Principal (Design Moderno)
    alertBox: {
        backgroundColor: colors.ALERT,
        padding: 28,
        borderRadius: 20,
        width: '92%',
        marginVertical: 15,
        marginBottom: 20,
        
        // Sombra moderna
        shadowColor: colors.ALERT,
        shadowOpacity: 0.25,
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 10 },
        elevation: 16,
        borderWidth: 1,
        borderColor: 'rgba(220, 38, 38, 0.2)',
    },
    okBox: {
        backgroundColor: colors.SUCCESS,
        padding: 28,
        borderRadius: 20,
        width: '92%',
        marginVertical: 15,
        marginBottom: 20,
        
        // Sombra suave
        shadowColor: colors.SUCCESS,
        shadowOpacity: 0.2,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 8 },
        elevation: 12,
        borderWidth: 1,
        borderColor: 'rgba(5, 150, 105, 0.2)',
    },
    alertText: {
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        lineHeight: 28,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    okText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
        letterSpacing: 0.8,
        lineHeight: 26,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    // Seção de Relatórios (Cards Modernos)
    reportsSection: {
        width: '92%',
        alignItems: 'center',
        padding: 28,
        backgroundColor: colors.CARD_BACKGROUND,
        borderRadius: 24,
        marginVertical: 10,
        marginBottom: 30,
        
        // Sombra elegante
        shadowColor: colors.SHADOW,
        shadowOpacity: 0.08,
        shadowRadius: 25,
        shadowOffset: { width: 0, height: 8 },
        elevation: 10,
        borderWidth: 1,
        borderColor: 'rgba(226, 232, 240, 0.8)',
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: '800',
        marginBottom: 25,
        color: colors.TEXT_PRIMARY,
        textTransform: 'uppercase',
        letterSpacing: 1,
        textAlign: 'center',
        textShadowColor: 'rgba(30, 41, 59, 0.1)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    metricCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(226, 232, 240, 0.8)',
        marginBottom: 5,
    },
    metricValue: {
        fontSize: 40,
        fontWeight: '900',
        color: colors.TEXT_PRIMARY,
        textShadowColor: 'rgba(30, 41, 59, 0.15)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 3,
        letterSpacing: -0.5,
    },
    metricLabel: {
        fontSize: 16,
        color: colors.TEXT_SECONDARY,
        fontWeight: '600',
        letterSpacing: 0.3,
        textAlign: 'right',
        flex: 1,
        marginLeft: 15,
    },
    placeholderText: {
        fontSize: 15,
        color: colors.TEXT_SECONDARY,
        marginTop: 25,
        textAlign: 'center',
        fontStyle: 'italic',
        lineHeight: 24,
        fontWeight: '500',
        paddingHorizontal: 10,
    },
    footer: {
        color: colors.ACCENT,
        fontSize: 14,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: '700',
        letterSpacing: 0.5,
        textAlign: 'center',
        textShadowColor: 'rgba(59, 130, 246, 0.1)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    }
});

// Estilos para o Indicador de Seção (Design Circular Moderno)
export const indicatorStyles = StyleSheet.create({
    sectionContainer: {
        alignItems: 'center',
        marginHorizontal: 15,
    },
    title: {
        fontSize: 13,
        fontWeight: '700',
        marginBottom: 12,
        color: colors.TEXT_SECONDARY,
        textTransform: 'uppercase',
        letterSpacing: 1,
        textAlign: 'center',
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        backgroundColor: colors.CARD_BACKGROUND,
        
        // Sombra moderna
        shadowColor: colors.SHADOW,
        shadowOpacity: 0.15,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.8)',
    },
    angleValue: {
        fontSize: 44,
        fontWeight: '900',
        color: colors.TEXT_PRIMARY,
        textShadowColor: 'rgba(30, 41, 59, 0.15)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 3,
        letterSpacing: -1,
    },
    statusText: {
        fontSize: 14,
        fontWeight: '800',
        marginTop: 8,
        color: colors.TEXT_PRIMARY,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        textShadowColor: 'rgba(30, 41, 59, 0.1)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
    },
});

// Estilos Adicionais para Estados Interativos
export const interactiveStyles = StyleSheet.create({
    touchableOpacity: {
        opacity: 1,
    },
    touchableOpacityPressed: {
        opacity: 0.8,
    },
});