import styled from "styled-components";
import { SecondaryButton } from "../atom/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import {useRecoilState} from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map(((val) => {
	return {
		id: val,
		name: `hryuuta-${val}`,
		image: "https://source.unsplash.com/Qb7D1xw28Co",
		email: "sample@aaaaa.com",
		phone: "00000000000",
		company: {
			name: "42tokyo"
		},
		website: "google.com"
	}
}));

export const Users = () => {
	//const  {userInfo, setUserInfo} = useContext(UserContext);
	const [ userInfo, setUserInfo] = useRecoilState(userState);
	console.log(userInfo);
	const onClickSwitch = () => setUserInfo({isAdmin: !userInfo.isAdmin });
	return (
		<SContainer>
			<h2>USER PAGES</h2>
			<SearchInput />
			<br />
			<SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
			<SUserArea>
				{users.map((user) => (
					<UserCard key={user.id} user={user}/>
				))}
			</SUserArea>
		</SContainer>
	);
}

const SContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px;
	text-align: center;
`;

const SUserArea = styled.div`
	padding-top: 40px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 20px;
`;