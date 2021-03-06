import React, { useState } from "react"

import Profile from "components/Profile"
import Login from "./Login"
import Signup from "./Signup"
import AccountButtons from "./AccountButtons"

function Account({ account }) {
	const [signup, setSignup] = useState(false)
	if (account) {
		return (
			<div className="sp-flex-body">
				<div style={{ width: 250, margin: "50px auto" }}>
					<Profile user={account} />
					<AccountButtons />
				</div>
			</div>
		)
	}

	if (signup) {
		return (
			<Signup
				login={() => {
					setSignup(false)
				}}
			/>
		)
	}

	return (
		<Login
			signup={() => {
				setSignup(true)
			}}
		/>
	)
}

export default Account
