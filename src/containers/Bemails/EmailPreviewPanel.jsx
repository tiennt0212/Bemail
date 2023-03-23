import React, { Suspense } from "react";
import styled from "styled-components";
import { EmailPreview } from "components";
import { InkBallLoading } from "components";
const EmailPreviewPanelStyled = styled.div`
  /* min-width: 40rem; */
  width: 100%;
  overflow-y: auto;
`;
const EmailPreviewPanel = ({
  emailList,
  onSelectEmail,
  loading,
  selectEmail,
  ...props
}) => {
  console.log("received emailList: ", emailList);
  return (
    <EmailPreviewPanelStyled>
      {emailList?.map((email, index) => {
        const {
          senderAvt,
          sender,
          title,
          time,
          content,
          id,
          senderInfo,
          receiverInfo,
        } = email;
        return (
          <EmailPreview
            key={`${sender}-${id}`}
            // senderAvt={senderAvt}
            // senderName={sender}
            senderInfo={senderInfo || receiverInfo}
            cardTitle={title}
            // time={time}
            cardContent={content}
            onSelectEmail={() => selectEmail({ ...email, index })}
          />
        );
      })}
    </EmailPreviewPanelStyled>
  );
};

export default EmailPreviewPanel;
