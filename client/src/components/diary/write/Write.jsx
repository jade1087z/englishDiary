import React, { memo, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RightPart from './right/RightPart'
import LeftPart from './left/LeftPart'
import mainhandleKeyPress from './mainHandleKeyPress'
import Upload from './post/Upload'
import handleSave from './handleSave'
import { getFormattedDate } from '../../../util/calendar/date/dateFormat'

const Write = () => {
    const quillRef = useRef(null)
    const user = useSelector((state) => state.user)
    const uid = user.uid

    const { date } = useParams()
    const [dateObj, setDate] = useState({
        year: '',
        month: '',
        day: '',
    })

    let navigate = useNavigate()

    useEffect(() => {
        if (date && typeof date === 'string') {
            let formatDate = getFormattedDate(date)
            setDate(formatDate)
        }
    }, [date])

    const [title, setTitle] = useState()
    // Ginger api 부분
    const [value, setValue] = useState('')
    const [correctionsData, setCorrectionsData] = useState([])

    const handleKeyPress = (event) => {
        mainhandleKeyPress(
            event,
            value,
            setValue,
            correctionsData,
            setCorrectionsData,
            quillRef
        )
    }

    const upload = async (e) => {
        handleSave(e, title, value, quillRef, uid, navigate)
    }

    return (
        <div id="wrap">
            {/*<Header /> */}
            <div id="write">
                <div className="write__wrap">
                    <div className="today__date">
                        <p className="box">
                            {dateObj.month}, {dateObj.day}{' '}
                        </p>
                    </div>
                    <div className="write__main">
                        <LeftPart
                            quillRef={quillRef}
                            title={title}
                            setTitle={setTitle}
                            value={value}
                            setValue={setValue}
                            mainhandleKeyPress={handleKeyPress}
                        />
                        <RightPart
                            correctionsData={correctionsData}
                            mainhandleKeyPress={handleKeyPress}
                            uid={uid}
                        />
                    </div>
                    {/* <button onClick={onClickSave}>저장</button> */}
                    <Upload upload={upload} />
                </div>
            </div>
        </div>
    )
}

export default Write
