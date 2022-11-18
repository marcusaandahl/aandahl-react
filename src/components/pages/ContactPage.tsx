import { useState } from 'react';
import styled from 'styled-components'
import { toast } from 'react-toastify';
import axios from 'axios';

export default function ContactPage({}) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sendingEmail, setSendingEmail] = useState(false)

    const onFormSubmit = (e: any) => {
        e.preventDefault()
        setSendingEmail(true)

        axios.post('https://flourishing-brioche-3b8db7.netlify.app/.netlify/functions/sendMail', {
            email: email,
            message: message
        })
        .then(res => {
            toast("Email sent! Thank you for reaching out", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored",
                icon: "🚀",
                className: "test"
            })
        }).catch(error => {
            toast("Error occured whilst sending email, try contacting another way", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored",
                icon: "😓",
                className: "test"
            });
        })
        .finally(() => {
            setSendingEmail(false)
        })
    }

    return (
        <>
            <ContactContainer className='px-[60px] tb:px-[80px]'>
                <ContactCard className='h-[174px] tb:h-[300px] lt:max-w-[600px]'>
                    <SendMessageContainer onSubmit={onFormSubmit}>
                        <SendMessageTitle className="text-[12px] tb:text-[18px]">Send me a message</SendMessageTitle>
                        <EmailInput className="text-[8px] tb:text-[12px]" placeholder='Email address' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <MessageInput className="text-[8px] tb:text-[12px]" placeholder='Your message' onChange={(e) => setMessage(e.target.value)} value={message}  />
                        <SendMessageButton className="text-[8px] tb:text-[12px]" type="submit" disabled={sendingEmail} value={sendingEmail ? "Sending..." : "Send message"} />
                    </SendMessageContainer>
                </ContactCard>
            </ContactContainer>
        </>
    )
}

const SendMessageButton = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    width: fit-content;
    height: fit-content;
    background: linear-gradient(88.3deg, #FF745B 1.65%, #E3398B 98.89%);
    box-shadow: 0px 10px 20px rgba(2, 4, 6, 0.15);
    border-radius: 10px;

    font-family: 'DM Sans';
    font-style: normal;
    color: #F2F2F2;
`

const MessageInput = styled.textarea`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 8px;
    gap: 10px;
    width: 100%;
    height: 100%;
    background-color: rgba(242, 242, 242, 0.3);
    box-shadow: 0px 10px 20px rgba(2, 4, 6, 0.15);
    border-radius: 10px;

    resize: none;

    font-family: 'Poppins';
    font-weight: 400;
    color: #F2F2F2;

    ::placeholder {
        color: #F2F2F2;
        opacity: 0.6;
    }
`

const EmailInput = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 8px;
    gap: 10px;
    width: 100%;
    background: rgba(242, 242, 242, 0.3);
    box-shadow: 0px 10px 20px rgba(2, 4, 6, 0.15);
    border-radius: 10px;

    font-family: 'Poppins';
    font-weight: 400;
    color: #F2F2F2;

    ::placeholder {
        color: #F2F2F2;
        opacity: 0.6;
    }
`

const SendMessageTitle = styled.h3`
    font-family: 'DM Sans';
    font-weight: 700;
    color: #F2F2F2;
`

const SendMessageContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: 100%;
`

const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    gap: 10px;
    width: 100%;
    background: radial-gradient(71% 292.81% at 92.2% 80.75%, #7634AA 0%, #23884E 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-radius: 30px;
`

const ContactContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100vw;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 60px;
`