const App = () => {
    const questions = [
        {
          question: 'Thủ đô của Việt Nam là?',
          answers: [
            { content: 'Thành phố Hồ Chí Minh', correct: false },
            { content: 'Hải Phòng', correct: false },
            { content: 'Hà Nội', correct: true },
            { content: 'Đà Nẵng', correct: false },
          ],
        },
        {
          question: 'Việt Nam có bao nhiêu tỉnh thành?',
          answers: [
            { content: '60', correct: false },
            { content: '61', correct: false },
            { content: '62', correct: false },
            { content: '63', correct: true },
          ],
        },
        {
          question: 'Năm 2022 dân số Việt Nam khoảng bao nhiêu người?',
          answers: [
            { content: 'Khoảng 99 triệu người', correct: true },
            { content: 'Khoảng 102 triệu người', correct: false },
            { content: 'Khoảng 105 triệu người', correct: false },
            { content: 'Khoảng 108 triệu người', correct: false },
          ],
        },
      ];

    
    return (
        <div className="app">

            <div className="score-section">You scored out of 4</div>


            <div className="question-section">
                <div className="question-count"><span>Question </span>/</div>
                <div className="question-text"></div>
            </div>
            <div className="answer-section">
                
            </div>
        </div>
    )
}
// Root Dom
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<App />)