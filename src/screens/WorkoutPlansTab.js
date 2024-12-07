import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Dimensions,
    Touchable
} from 'react-native';

import { theme } from '../styles/theme';
import { useNavigation } from '@react-navigation/native';

const WorkoutPlansTab = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.tabContainer}>
            <TouchableOpacity 
                style={styles.addPlanButton}
            >
                <Text style={styles.addPlanButtonText}>新增健身計畫</Text>
            </TouchableOpacity>
            
            {/* Example workout plan cards */}
            <TouchableOpacity 
                style={styles.planCard}
                onPress={() => navigation.navigate('AddTrack')}
            >
                <Text style={styles.planTitle}>上半身訓練</Text>
                <Text style={styles.planDescription}>胸部 • 背部 • 手臂</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.planCard}
                onPress={() => navigation.navigate('AddTrack')}
            >
                <Text style={styles.planTitle}>下半身訓練</Text>
                <Text style={styles.planDescription}>腿部 • 臀部</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    addPlanButton: {
        backgroundColor: theme.colors.primary,
        margin: 15,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addPlanButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    planCard: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    planTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    planDescription: {
        fontSize: 14,
        color: '#666',
    },
})

export default WorkoutPlansTab;