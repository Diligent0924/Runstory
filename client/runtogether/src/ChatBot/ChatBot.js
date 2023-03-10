import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
const theme = {
    background: '#ffffff',
    headerBgColor: '#CBD9E7',
    headerFontColor: '#6a6a6a',
    headerFontSize: '15px',
    botBubbleColor: '#CBD9E7',
    botFontColor: '#6a6a6a',
    userBubbleColor: '#EEB6B6',
    userFontColor: '#6a6a6a',
  };
const ChattingBot = () => {
    return (
        <ThemeProvider theme={theme}>
        <ChatBot 
            botAvatar="https://t.pimg.jp/058/210/521/5/58210521.jpg" 
            botDelay="1300" 
            userAvatar="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            placeholder=""
            hideSubmitButton="true"
            headerTitle="RUNSTORY ì±ë´ ðââï¸ðââï¸"
            steps={[
                {
                id: '1',
                message: 'RUNSTORYì ì¤ì  ê²ì íìí©ëë¤! ë¬´ìì ëìëë¦´ê¹ì?',
                trigger: '2',
                },
                {
                id: '2',
                message: 'RUNSTORYë ê°ì´ ë¬ë í¬ë£¨ë¥¼ êµ¬íê±°ë ì¶ì² ë°ê³ , ì¸ì¦ë ê°ë¥íë©°, í¼ëë¥¼ ê²ìí  ì ìë ì°ì± ì ì© SNSìëë¤!',
                trigger: 'help'
                },
                {
                id: 'help',
                options: [
                    {value: 'running-crew', label: 'ë¬ë í¬ë£¨ê° ë­ì¼?', trigger: 'about-running-crew'},
                    {value: 'feed', label: 'í¼ëê° ë­ì¼?', trigger: 'about-feed'},
                    {value: 'how-to-auth', label: 'ì¸ì¦ì ì´ë¤ ë°©ìì¼ë¡ í´?', trigger: 'auth-way'},
                    {value: 'level', label: 'ì¸ì¦íë©´ ë­ê° ì¢ì?', trigger: 'why-auth'},
                    {value: 'how-to-search', label: 'ê²ìì ì´ë»ê² ì§íí´?', trigger: 'why-search'},
                    {value: 'how-to-create-feed', label: 'í¼ëë±ë¡ì ì´ë»ê² í´?', trigger: 'make-feed'},
                    {value: 'how-to-create-crew', label: 'ë¬ëí¬ë£¨ë ì´ë»ê² ë§ë¤ì´?', trigger: 'make-crew'},
                    {value: 'how-to-chat', label: 'ì±íì ì´ë»ê² í´?', trigger: 'how-chat'},

                ]
                },
                {
                    id: 'about-running-crew',
                    message: 'ë¬ë í¬ë£¨ë ê°ì´ ì°ì±íë ì¬ëë¤ì ë§í´ì!',
                    trigger: 'about-running-crew2'
                },
                {
                    id: 'about-running-crew2',
                    message: 'RUNSTORYììë ë¬ë í¬ë£¨ ëª¨ì§ê¸ ìì±ì íµí´ ë¬ë í¬ë£¨ë¥¼ ëì´, ì±ë³ ë³ë¡ ê¾¸ë¦´ ì ìì´ì!',
                    trigger: 'about-running-crew3'
                },
                {
                    id: 'about-running-crew3',
                    message: 'ì°¸ì¬íê³  ì¶ì í¬ë£¨ê° ìë¤ë©´ ìì½ ë²í¼ì ëë¬ ê°ì´ ë°ì´ë³´ì¸ì!',
                    trigger: 'anything-else'
                },
                {
                    id: 'about-feed',
                    message: 'í¼ëë ë¬ë í¬ë£¨ ëª¨ì§ê¸ê³¼ë ì¡°ê¸ ë¤ë¥¸ ê°ëì´ìì!',
                    trigger: 'about-feed2'
                },
                {
                    id: 'about-feed2',
                    message: 'ë¬ë í¬ë£¨ë¥¼ ëª¨ì§íë ëª©ì ì´ ìë ëª¨ë  ê¸ì í¼ëë¡ ìì±í  ì ìì´ì!',
                    trigger: 'about-feed3'
                },
                {
                    id: 'about-feed3',
                    message: 'í¼ëììë ì¢ììë ëê¸ì ë¨ê²¨ ì¬ëë¤ê³¼ ìíµí  ì ìì´ì!',
                    trigger: 'about-feed4'
                },
                {
                    id: 'about-feed4',
                    message: "ì¬ë¬ ì¬ëë¤ê³¼ ìíµíë©° ì´ë ì·¨ë¯¸ ìíì ê³µì í´ë³´ì¸ì!",
                    trigger: 'anything-else'
                },
                {
                    id: 'auth-way',
                    message: 'ì°ì± ì¸ì¦ì ì¶ë°ì§ìì ì¸ì¦ ë²í¼ì ëë¦ì¼ë¡ì¨ ì´ë£¨ì´ì ¸ì!',
                    trigger: 'auth-way2'
                },
                {
                    id: 'auth-way2',
                    message: 'ì¶ë°ì§ìì 1.5km ì´ë´ê° ìë ê²½ì° ì¸ì¦ì´ ë¶ê°í©ëë¤!',
                    trigger: 'anything-else'
                },
                {
                    id: 'why-auth',
                    message: 'ì¸ì¦ì íë©´ ì°ì±í ê±°ë¦¬ë§í¼ ê²½íì¹ê° ì¬ë¼ì!',
                    trigger: 'why-auth2'
                },
                {
                    id: 'why-auth2',
                    message: 'ê²½íì¹ê° ì´ë ì ë ì¬ë¼ê°ë©´ ë ë²¨ìì´ ë©ëë¤!',
                    trigger: 'why-auth3'
                },
                {
                    id: 'why-auth3',
                    message: 'ë ë²¨ìì ë°ë¼ ë§¨ë°âì§ì âê³ ë¬´ì âìºë²ì¤âë ê°ì  ìì´ì½ì´ ê°ì¸ í¼ë íì´ì§ì ëíë©ëë¤!',
                    trigger: 'why-auth4'
                },
                {
                    id: 'why-auth4',
                    message: 'ê²½íì¹ë¥¼ ìì ì¹êµ¬ë¤ê³¼ ê²½ìí´ë³´ì¸ì!',
                    trigger: 'anything-else'
                },
                {
                    id: 'anything-else',
                    message: 'ì´ì¸ì ë ê¶ê¸í ê²ì´ ìì¼ì ê°ì?',
                    trigger: 'yes-or-no'
                },
                {
                    id: 'why-search',
                    message: 'ê²ì ê¸°ë¥ì ì ì  / í¼ë / ë¬ëí¬ë£¨ ì¸ê°ì§ë¥¼ ì°¾ì ì ììµëë¤.',
                    trigger: 'why-search2'
                },
                {
                    id: 'why-search2',
                    message: 'ì ì  ê²ìì ì ì  ëë¤ì ì¤ ì¼ë¶ë¥¼ ê²ìíë©´ ì°¾ì ì ììµëë¤.',
                    trigger: 'why-search3'
                },
                {
                    id: 'why-search3',
                    message: 'í¼ë ê²ìì í´ìíê·¸ë¥¼ íµí´ì ê²ìíì¬ ì°¾ì ì ììµëë¤.',
                    trigger: 'why-search4'
                },
                {
                    id: 'why-search4',
                    message: 'ë¬ë í¬ë£¨ë í¬ë£¨ëªì íµíì¬ ê²ìíì¬ ì°¾ì ì ììµëë¤.',
                    trigger: 'anything-else'
                },
              {
                id: 'make-feed',
                message: 'í¼ëë¥¼ ë§ë¤ê¸° ìí´ìë ì¤ê°ì +ë²í¼ì ëë¬ì£¼ì¸ì!',
                trigger: 'make-feed2'
              },
              {
                id: 'make-feed2',
                message: 'ëë¥¼ì 3ê°ì ë²í¼ì´ ë¨ê²ëëë° í¼ëìì± ë²í¼ì ëë¬ì£¼ì¸ì.',
                trigger: 'make-feed3'
              },
              {
                id: 'make-feed3',
                message: 'ì¬ì§ì ì¶ê°íìê³ , ë´ì©, í´ìíê·¸ë¥¼ ì ííìê³  ê³µê°ë²ìë¥¼ ê³¨ë¼ì£¼ì¸ì .',
                trigger: 'make-feed4'
              },
              {
                id: 'make-feed4',
                message: 'ë±ë¡ì ëë¬ì£¼ìë©´ í¼ëê° ë±ë¡ëê³  ë´ í¼ëì ê°ìë©´ íì¸íì¤ ì ììµëë¤.',
                trigger: 'anything-else'
              },
              {
                id: 'make-crew',
                message: 'ë¬ëí¬ë£¨ë¥¼ ë§ë¤ê¸° ìí´ìë ì¤ê°ì +ë²í¼ì ëë¬ì£¼ì¸ì!',
                trigger: 'make-crew2'
              },
              {
                id: 'make-crew2',
                message: 'ëë¥¼ì 3ê°ì ë²í¼ì´ ë¨ê²ëëë° ë¬ëí¬ë£¨ ëª¨ì§ ë²í¼ì ëë¬ì£¼ì¸ì.',
                trigger: 'make-crew3'
              },
              {
                id: 'make-crew3',
                message: 'ì¬ì§ì ì¶ê°íìê³ , ë´ì©, í´ìíê·¸ë¥¼ ì ííìê³  ì¶ë°,ëì°©ì§, ì°ë ¹ëì ì¸ìì ê³¨ë¼ì£¼ì¸ì .',
                trigger: 'make-crew4'
              },
              {
                id: 'make-crew4',
                message: 'ë±ë¡ì ëë¬ì£¼ìë©´ ë¬ëí¬ë£¨ê° ë±ë¡ëê³  ë´ ë¬ëí¬ë£¨ì ê°ìë©´ íì¸íì¤ ì ììµëë¤.',
                trigger: 'anything-else'
              },
              {
                id: 'how-chat',
                message: 'ì±í ê¸°ë¥ì ì¬ì©íê¸° ìí´ìë ì¤ë¥¸ìª½ ìì ì±íëª¨ìì ëë¬ì£¼ì¸ì.',
                trigger: 'how-chat2'
              },
              {
                id: 'how-chat2',
                message: 'ëë¥¼ì ì±í ê°ë¥í ì¬ëë¤ ëªë¨ì´ ë¨ê² ë©ëë¤.',
                trigger: 'how-chat3'
              },
              {
                id: 'how-chat3',
                message: 'ê·¸ ì¬ëë¤ ì¤ ì±ííê³  ì¶ì ì¬ëì ì íí©ëë¤ .',
                trigger: 'how-chat4'
              },
              {
                id: 'how-chat4',
                message: 'ê·¸ í ì±íì ì§ííìë©´ ë©ëë¤.',
                trigger: 'anything-else'
              },
                {
                    id: 'yes-or-no',
                    options: [
                        {value: 'yes', label: 'ìì´!', trigger: 'help'},
                        {value: 'no', label: 'ìì´!', end: true},
                    ]
                }
            ]}
        />
        </ThemeProvider>
    );
}

export default ChattingBot;
