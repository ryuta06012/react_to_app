import { memo } from "react";
import	styled from "styled-components";
import { PrimaryButton } from "../atom/button/PrimaryButton";
import { Input } from "../atom/input/Input";

export const SearchInput = memo(() => {
	console.log("searchInput");
	return (
		<SContainer>
				<Input placeholder="検索条件を入力"/>
			<SButtonWrapper>
				<PrimaryButton>Search</PrimaryButton>
			</SButtonWrapper>
		</SContainer>
	);
});

const SButtonWrapper = styled.div`
	padding-left: 8px;
`;
const SContainer = styled.div`
	display: flex;
	align-items: center;
`;