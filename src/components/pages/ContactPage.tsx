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
                    <GetInTouchContainer className="hidden tb:flex">
                        <GetInTouchTitle className="text-[12px] tb:text-[18px]">Get in touch</GetInTouchTitle>
                        <GetInTouchText className="text-[9px] tb:text-[15px]">Feel me to reach out to me for any inquieries.</GetInTouchText>
                        <PhoneNumberContainer>
                            <div className='w-10 h-10 bg-[#f2f2f24d] rounded-full flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-white">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <GetInTouchLinks className=''>+45 31 56 54 74</GetInTouchLinks>
                        </PhoneNumberContainer>
                        <EmailContainer>
                            <div className='w-10 h-10 bg-[#f2f2f24d] rounded-full flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-white">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </div>
                            <GetInTouchLinks>marcus.aandahl@gmail.com</GetInTouchLinks>
                        </EmailContainer>
                    </GetInTouchContainer>
                    <SendMessageContainer onSubmit={onFormSubmit}>
                        <SendMessageTitle className="text-[12px] tb:text-[18px]">Send me a message</SendMessageTitle>
                        <EmailInput className="text-[8px] tb:text-[12px]" placeholder='Email address' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <MessageInput className="text-[8px] tb:text-[12px]" placeholder='Your message' onChange={(e) => setMessage(e.target.value)} value={message}  />
                        <SendMessageButton className="text-[8px] tb:text-[12px]" type="submit" disabled={sendingEmail} value={sendingEmail ? "Sending..." : "Send message"} />
                    </SendMessageContainer>
                </ContactCard>
            </ContactContainer>
            <Footer>

            </Footer>
        </>
    )
}

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 40px 0px 32px;
    gap: 34px;
    width: 100%
    min-height: 295px;
    background: #212121;
`

const GetInTouchLinks = styled.p`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 143.2%;
    color: #F2F2F2;
`

const EmailContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
`

const PhoneNumberContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
`

const GetInTouchText = styled.p`
    font-family: 'DM Sans';
    font-weight: 400;
    color: #F2F2F2;
`

const GetInTouchTitle = styled.h3`
    font-family: 'DM Sans';
    font-weight: 700;
    color: #F2F2F2;
`

const GetInTouchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    height: 100%;
    gap: 16px;
`

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
    flex-direction: row;
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