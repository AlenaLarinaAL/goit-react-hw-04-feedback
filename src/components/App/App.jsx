import { useState } from 'react';
import { FeedbackOption, Notification, Section, Statistics } from 'components';

export const App = () => {
  const options = ['good', 'neutral', 'bad'];
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  const totalFeedbacks = goodFeedback + neutralFeedback + badFeedback;
  const positivePercentage = parseInt((goodFeedback / totalFeedbacks) * 100);

  const onLeaveFeedbacks = option => {
    switch (option) {
      case 'good':
        setGoodFeedback(goodFeedback => goodFeedback + 1);
        break;

      case 'neutral':
        setNeutralFeedback(neutralFeedback => neutralFeedback + 1);
        break;

      case 'bad':
        setBadFeedback(badFeedback => badFeedback + 1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOption options={options} onLeaveFeedbacks={onLeaveFeedbacks} />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks ? (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={totalFeedbacks}
            positive={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

// import { Component } from 'react';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedbacks = option => {
//     this.setState(state => ({ [option]: state[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return parseInt((good / total) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedbacks = this.countTotalFeedback();
//     const positiveFeedbacks = this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOption
//             options={Object.keys(this.state)}
//             onLeaveFeedbacks={this.onLeaveFeedbacks}
//           />
//         </Section>
//         <Section title="Statistics">
//           {totalFeedbacks ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedbacks}
//               positive={positiveFeedbacks}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
