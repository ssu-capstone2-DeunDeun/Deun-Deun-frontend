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
		.mainInfo {
			font-size: 20px;
			color: #606060;
			display: flex;
			align-items: center;
			.mainInfoItem {
				border-radius: 26px;
				border: 1px solid #707070;
				padding: 9px 27px 9px 26px;
				margin-right: 10px;
			}
		}
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
						margin-right: 10px;
						width: 31px;
						height: 31px;
						opacity: 0.2;
					}
					div {
						display: flex;
						align-items: center;
					}
				}
				.func {
					display: flex;
					align-items: center;
					.viewAll {
						display: flex;
						align-items: center;
						font-weight: bold;
						div {
							margin-right: 9.4px;
						}
						margin-right: 44.5px;
					}
					.username {
						display: flex;
						align-items: center;
						div {
							margin-right: 9.4px;
							color: #b2b2b2;
						}
						margin-right: 20px;
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
	svg {
		width: 31px;
		height: 31px;
		opacity: 0.2;
		padding-left: 37.8px;
	}
	button {
		width: 252px;
		height: 99px;
		border: 0;
		background: #aaaaaa;
		color: #ffffff;
		font-size: 18px;
		font-weight: 900;
		cursor: pointer;
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
	.firstpass {
		width: 65px;
	}
`;

export const PopupBlock = styled.div`
	.delete {
		display: none;
	}
	.popupBlock {
		width: 988px;
		height: 849px;
		position: absolute;
		box-shadow: 15px 15px 30px 0 rgba(0, 0, 0, 0.16);
		margin: 0 auto;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 100;
		background-color: #ffffff;
		padding: 48px 64px 45px 55px;
		color: #282828;
		.popupTitle {
			font-size: 32px;
			font-weight: 900;
			margin-bottom: 40px;
			display: flex;
			justify-content: space-between;
			svg {
				opacity: 0.3;

				&:hover {
					opacity: 0.7;
				}
			}
		}
		.kind {
			font-size: 19px;
			font-weight: 900;
			margin-bottom: 22px;
		}
		.kindItem {
			display: flex;
			align-items: center;
			font-weight: bold;
			margin-bottom: 22px;

			svg {
				margin-right: 13px;
				width: 30px;
				height: 23px;
				opacity: 0.2;
			}
			div {
				margin-right: 40px;
			}
		}
		.receiver {
			font-size: 19px;
			font-weight: bold;
		}
		.receiverIist {
			display: flex;
			flex-wrap: wrap;
			button {
				width: 250px;
				height: 39px;
				font-size: 18px;
				margin: 20px 22px 0 0;
				color: #282828;
				background-color: #f7f7f7;
				border: none;
				display: flex;
				align-items: center;
				justify-content: center;
				svg {
					margin-left: 20px;
					cursor: pointer;
				}
			}
		}
		.content {
			font-weight: bold;
			margin-top: 33px;
		}
		.btn {
			text-align: center;
		}
	}
`;
export const StyledTextarea = styled.textarea`
	width: 869px;
	height: 238px;
	margin-top: 27px;
	margin-bottom: 44px;
	font-size: 20px;
	border: none;
	background-color: #f7f7f7;
	outline: none;
	padding-left: 30px;
	padding-top: 21.5px;
`;
