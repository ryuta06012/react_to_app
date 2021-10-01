import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useResetRecoilState} from "recoil";
import { SecondaryButton } from "../atom/button/SecondaryButton";
import { userState } from "../../store/userState";

export const Top = () => {
	const history = useHistory();
	// const { setUserInfo } = useContext(UserContext);
	const setUserInfo = useResetRecoilState(userState);
	const onClickAdmin = () => {
		setUserInfo({ isAdmin: true});
		history.push("/users");
	}
	const onClickGuest = () => {
		setUserInfo({ isAdmin: false});
		history.push("/users")
	}

	return (
		<SContainer>
			<h2>TOP PAGE</h2>
			<SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
			<br />
			<br />
			<SecondaryButton onClick={onClickGuest}>一般ユーザー</SecondaryButton>
		</SContainer>
	);
}

const SContainer = styled.div`
	text-align: center;
`;