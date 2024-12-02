import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { layout, typography, buttonStyles, formStyles } from '../styles'; 
import AddExerciseModal from '../components/AddExerciseModal';

const AddTrackPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  // 改為二層結構：exercises 包含多個運動，每個運動有自己的 sets
  const [exercises, setExercises] = useState([]);

  // 為特定運動添加新的一組
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

  // 添加新的運動項目
  const addExercise = (exerciseName) => {
    const newExerciseId = exercises.length + 1;
    setExercises([
      ...exercises,
      {
        id: newExerciseId,
        name: exerciseName,
        sets: [{ id: 1, weight: '', reps: '' }]
      }
    ]);
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={layout.baseContainer}>
      <ScrollView>
        {exercises.map((exercise) => (
          <View key={exercise.id} style={layout.exerciseContainer}>
            <Text style={typography.exerciseTitle}>{exercise.name}</Text>
            
            {/* set是exercise內的物件，包括id, weight, reps */}
            {/* setIndex類似for迴圈中的i，用於追縱是第幾個物件 */}
            {exercise.sets.map((set, setIndex) => (
              <View key={set.id} style={layout.exerciseRow}>
                <Text style={typography.exerciseNumber}>#{set.id}</Text>
                
                <View style={layout.inputContainer}>
                  <View style={layout.inputWrapper}>
                    <TextInput
                      style={formStyles.exerciseInput}
                      placeholder="重量 (kg)"
                      keyboardType="numeric"
                      value={set.weight}
                    />
                  </View>
                  
                  <View style={layout.inputWrapper}>
                    <TextInput
                      style={formStyles.exerciseInput}
                      placeholder="次數"
                      keyboardType="numeric"
                      value={set.reps}
                    />
                  </View>

                  {/* 類似for迴圈中的i用途，檢查是不是最後一個元件 */}
                  {setIndex === exercise.sets.length - 1 && (
                    <TouchableOpacity
                      style={buttonStyles.addButton}
                      onPress={() => addSet(exercise.id)}
                    >
                      <Text style={buttonStyles.addButtonText}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>
        ))}

        <TouchableOpacity
          style={buttonStyles.newExerciseButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={buttonStyles.newExerciseButtonText}>新增動作</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <AddExerciseModal 
      // 這邊作為prop傳入modal的參數，是以參考的形式傳遞
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAdd={addExercise}
      />
    </SafeAreaView>
  );
};

export default AddTrackPage;