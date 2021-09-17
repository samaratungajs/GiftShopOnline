import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import Card from "../Screen/cardpayment"

const PUBLIC_KEY = "pk_test_51JXBWcHt6IMazlmL8u1g2nU4AlrX4pixRD5Fuchm8FyfQUPGjau20Bw7dYaixS4nVi3kYBPEOM7hcCcaQ7GWOJbQ0015Z4OMnG"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <div>
		<Elements stripe={stripeTestPromise}>
			<Card />
		</Elements></div>
	)
}