import styled from '@emotion/styled';

export const BasicBlock = styled.div`
	margin: 0 86px;
	display: flex;
	position: relative;
`;

export const MenuBlock = styled.div`
	margin-right: 73px;
	.menu {
		font-size: 18px;
		color: #282828;
		width: 274px;
		.menuItem {
			.menuTitle {
				font-weight: 500;
				height: 64px;
				padding-left: 24px;
				display: flex;
				align-items: center;

				&:hover {
					background-color: #e3e3e3;
					font-weight: bold;
				}
			}
			.subMenu {
				/* display:none; */
				div {
					height: 64px;
					display: flex;
					align-items: center;
					padding-left: 46px;

					&:hover {
						font-weight: bold;
					}
				}
			}
		}
	}
`;
export const ContentBlock = styled.div`
	.header {
		display: flex;
		align-items: center;
		.headerTitle {
			margin-right: 53px;
			font-size: 25px;
			font-weight: 900;
			color: #282828;
		}
		.headerInfo {
			display: flex;
			align-items: center;
			font-size: 23px;
			font-weight: bold;
			margin-right: 29.5px;
			div {
				margin-right: 12.8px;
			}
		}
	}
	.main {
		margin-top: 60px;
		width: 1400px;
		.mainTitle {
			margin-top: 26px;
			font-size: 32px;
			font-weight: bold;
			color: #282828;
			margin-bottom: 30.5px;
		}
		.mainContent {
			.mainContentHeader {
				border-top: 1px solid #707070;
				border-bottom: 1px solid #707070;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 66px;
				padding-left: 37.8px;
				font-size: 15px;
				.message {
					display: flex;
					svg {
						width: 31px;
						height: 31px;
						opacity: 0.2;
					}
				}
				.func {
					display: flex;
					align-items: center;
					font-weight: bold;
					margin-right: 145px;
					.allUnit {
						display: flex;
						align-items: center;
						margin-right: 65.5px;
						div {
							margin-right: 8.4px;
						}
					}
					.allRole {
						display: flex;
						align-items: center;
						margin-right: 60.5px;
						div {
							margin-right: 8.4px;
						}
					}
					.allAuthorized {
						display: flex;

						align-items: center;
						div {
							margin-right: 8.4px;
						}
					}
				}
			}
		}
	}
`;

export const ApplicantInfoBlock = styled.div`
	display: flex;
	font-size: 18px;
	color: #282828;
	font-weight: 900;
	align-items: center;
	justify-content: space-between;
	margin-top: 18px;
	background-color: #f7f7f7;
	height: 99px;
	text-align: center;
	svg {
		width: 31px;
		height: 31px;
		opacity: 0.2;
		padding-left: 37.8px;
	}
	button {
		width: 50px;
		height: 44.4px;
		border: 0;
		background: #ffffff;
		color: #282828;
		font-size: 13px;
		font-weight: 500;
		cursor: pointer;
		margin-right: 32.1px;
	}
	.nickname {
		width: 193px;
	}
	.phoneNumber {
		width: 134px;
	}
	.email {
		width: 202px;
	}
	.unit {
		width: 70px;
	}
	.role {
		width: 70px;
	}
	.authorized {
		width: 70px;
	}
`;
