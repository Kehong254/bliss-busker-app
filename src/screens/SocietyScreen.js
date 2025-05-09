import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'; // 导入进度条组件
import QuestionCard from '../component/QuestionCard';
import useQuestionNavigator from '../hooks/useQuestionNavigator';

const questions = [
  { id: 'q4-1', image: require('../img/society/society1.jpeg') },
  { id: 'q4-2', image: require('../img/society/society2.jpeg') },
  { id: 'q4-3', image: require('../img/society/society3.jpeg') },
  { id: 'q4-4', image: require('../img/society/society4.jpeg') },
  { id: 'q4-5', image: require('../img/society/society5.jpeg') },
  { id: 'q4-6', image: require('../img/society/society6.jpeg') },
  { id: 'q4-7', image: require('../img/society/society7.jpeg') },
  { id: 'q4-8', image: require('../img/society/society8.jpeg') },
  { id: 'q4-9', image: require('../img/society/society9.jpeg') },
  { id: 'q4-10', image: require('../img/society/society10.jpeg') },
  // Add more questions if needed
];

const SocietyScreen = () => {
  const {
    currentQuestion,
    handleResponseSubmit,
    currentQuestionIndex,
    responseSubmitted,
    isLoading,
  } = useQuestionNavigator(questions, 'society_question_index'); // 为 SocietyScreen 指定存储键

  // Calculate progress as a value between 0 and 1
  const progress = (currentQuestionIndex + 1) / questions.length;

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
        <ProgressBar
          progress={progress} // 设置进度条的进度
          width={300} // 进度条的宽度
          height={10} // 进度条的高度
          color="#3498db" // 进度条的颜色
          borderRadius={5} // 进度条的圆角
        />
      </View>
      <QuestionCard
        questionImage={currentQuestion.image}
        cardId={currentQuestion.id}
        onAnswerSubmit={handleResponseSubmit}
        initialResponse={responseSubmitted ? currentQuestionIndex : null}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        cardBackgroundColor="#fed905"
      />
    </View>
  );
};

export default SocietyScreen;
