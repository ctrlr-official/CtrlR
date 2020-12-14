import React, {Component} from 'react';
import Question from '../../Questions/Question';
import Answer from '../../Answer/Answer';
import back from '../../../assets/back.png'
import { Link } from 'react-router-dom';
import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'How does a computer virus work"?',
            2: 'What does the “https://” at the beginning of a URL denote, as opposed to "http://" (without the “s”)?',
            3: 'Which of the following is an example of a “phishing” attack?',
            4: 'Which of the following four passwords is the most secure?',
            5: '“Private browsing” is a feature in many internet browsers that lets users access web pages without any information (like browsing history) being stored by the browser. Can internet service providers see the online activities of their subscribers when those subscribers are using private browsing?',
            6: 'Turning off the GPS function of your smartphone prevents any tracking of your phone’s location.',
            7: 'If a public Wi-Fi network (such as in an airport or café) requires a password to access, is it generally safe to use that network for sensitive activities such as online banking?',
            8: 'What kind of cybersecurity risks can be minimized by using a Virtual Private Network (VPN)?',
            9: 'Working at your desk, you have received an email from Microsoft explaining that your password it out of date, and you must set a new one.The link within the email will guide you through it.Your next step is?',
            10: 'Your computer has just been infected with Ransomware and the hacker is demanding $1,000 before releasing it.What do you do?'
        },
        answers: {
            1: {
                1: 'When it is opened, it causes the computer to freeze',
                2: 'When it is opened, it copies the the data of user and sends it to a private server',
                3: 'When it is opened, it puts copies of itself onto thehard drime of user.'
            },
            2: {
                1: 'That the site has special high definition',
                2: 'That the site is the newest version available',
                3: 'That the site is not accessible to certain computers'
            },
            3: {
                1: 'Creating a fake website that looks nearly identical to a real website in order to trick users into entering their login information',
                2: 'Sending someone a text message that contains a malicious link that is disguised to look like a notification that the person has won a contest',
                3: 'Sending someone an email that contains a malicious link that is disguised to look like an email from someone the person knows.'
            },
             4: {
                1: 'WTh!5Z',
                2: 'Boat123',
                3: 'into*48'
            },
             5: {
                1: 'Yes',
                2: 'No',
                3: 'Not sure'
            },
             6: {
                1: 'True',
                2: 'False',
                3: 'Not sure'
            },
             7: {
                1: 'Yes, it is safe',
                2: 'No, it is not safe',
                3: 'Not sure'
            },
             8: {
                1: 'Use of insecure Wi-Fi networks',
                2: 'Key-logging',
                3: 'Phishing attacks'
            },
            9: {
                1: 'Follow the link and reset your password',
                2: 'Ignore the email and delete it',
                3: 'Reset your password manually'
            },
            10: {
                1: 'Try your best to get rid of it before anyone finds out',
                2: 'Pay the ransom. You need your files back!',
                3: 'Send an email to the IT guy in the office.'
            },
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '1',
            4: '1',
            5: '1',
            6: '1',
            7: '2',
            8: '1',
            9: '2',
            10: '3',
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            
           })};
            else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            
            <div className="Content">
             <div className="newbtn">
                    <Link to="/"
                        className="norkochak">
                        <img src={back} alt="backicon"/>
                        </Link>
                </div>
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}
