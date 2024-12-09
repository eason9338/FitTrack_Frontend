import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../styles/theme';
import { authStorage } from '../utils/auth';
import AddExerciseModal from '../components/AddExerciseModal';
import { config } from '../config';
import { useNavigation } from '@react-navigation/native';

const AddTrackPage = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [exercises, setExercises] = useState([]);

  const addSet = (exerciseId) => {
    setExercises(exercises.map(exercise => {
      if (exercise.id === exerciseId) {
        const newSetId = exercise.sets.length + 1;
        return {
          ...exercise,
          sets: [...exercise.sets, { id: newSetId, weight: '', reps: '' }]
        };
      }
      return exercise;
    }));
  };

  const addExercise = (exercise) => {
    setExercises([
      ...exercises,
      {
        id: exercise._id,
        name: exercise.name,
        sets: [{ id: 1, weight: '', reps: '' }]
      }
    ]);
    setIsModalVisible(false);
  };

  const updateSet = (exerciseId, setId, field, value) => {
    setExercises(exercises.map(exercise => {
      if(exercise.id === exerciseId) {
        return {
          ...exercise,
          sets: exercise.sets.map(set => {
            if(set.id === setId) {
              return {
                ...set,
                [field]: value
              }
            }
            return set;
          })
        }  
      }
      return exercise;
    }))
  }

  const handleCreateRecord = async () => {
    const token = await authStorage.getToken();

    try {
      const response = await fetch(`${config.baseURL}/api/record/createRecord`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          exercises
        }),
      });

      const data = await response.json();
      if(data.success) {
        Alert.alert('完成', '訓練已成功建立', [
          {
            text: '確定',
            onPress: () => {
              setExercises([]);
              navigation.navigate('Profile');
            }
          }
        ]);
        setExercises([]);
        navigation.navigate('AddTrack');

      } else {
        Alert.alert('錯誤', '建立訓練中發生錯誤');
        console.log(data);
        setExercises([]);
        navigation.navigate('AddTrack');

      }


    } catch (error) {

    }

  }


  return (
    <SafeAreaView style={styles.baseContainer}>
      <ScrollView>
        {exercises.map((exercise) => (
          <View key={exercise.id} style={styles.exerciseContainer}>
            <Text style={styles.exerciseTitle}>{exercise.name}</Text>
            
            {exercise.sets.map((set, setIndex) => (
              <View key={set.id} style={styles.exerciseRow}>
                <Text style={styles.exerciseNumber}>#{set.id}</Text>
                
                <View style={styles.inputContainer}>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      style={styles.exerciseInput}
                      placeholder="重量 (kg)"
                      keyboardType="numeric"
                      value={set.weight}
                      onChangeText={(value) => updateSet(exercise.id, set.id, 'weight', value)}
                    />
                  </View>
                  
                  <View style={styles.inputWrapper}>
                    <TextInput
                      style={styles.exerciseInput}
                      placeholder="次數"
                      keyboardType="numeric"
                      value={set.reps}
                      onChangeText={(value) => updateSet(exercise.id, set.id, 'reps', value)}
                    />
                  </View>

                  {setIndex === exercise.sets.length - 1 && (
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => addSet(exercise.id)}
                    >
                      <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>
        ))}

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.actionButtonText}>新增動作</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.finishButton]}
          onPress={() => handleCreateRecord()}
        >
          <Ionicons name="checkmark-outline" size={24} color="white" />
          <Text style={styles.actionButtonText}>完成訓練</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <AddExerciseModal 
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAdd={addExercise}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Container styles
  baseContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  exerciseContainer: {
    backgroundColor: theme.colors.cardBg,
    borderRadius: 12,
    margin: theme.spacing.medium,
    padding: theme.spacing.medium,
    ...theme.shadows.small,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    marginHorizontal: theme.spacing.small/2,
  },

  // Typography styles
  exerciseTitle: {
    fontSize: theme.fontSize.large,
    fontWeight: '600',
    marginBottom: theme.spacing.medium,
  },
  exerciseNumber: {
    width: 30,
    fontSize: theme.fontSize.medium,
    color: theme.colors.secondaryText,
  },

  // Exercise row styles
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.small,
  },
  exerciseInput: {
    backgroundColor: theme.colors.background,
    borderRadius: 8,
    padding: theme.spacing.small,
    fontSize: theme.fontSize.medium,
    color: theme.colors.text,
  },

  // Button styles
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.small,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  actionButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    padding: theme.spacing.medium,
    margin: theme.spacing.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    color: theme.colors.cardBg,
    fontSize: theme.fontSize.medium,
    fontWeight: '600',
    marginLeft: theme.spacing.small,
  },
  finishButton: {
    backgroundColor: '#34C759', // 使用固定的完成按鈕顏色
  },
});

export default AddTrackPage;