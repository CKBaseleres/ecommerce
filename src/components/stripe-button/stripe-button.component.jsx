import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_aSZmslrOMtrDbz08fxsAGQuo00mUGdZeMd';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='ecommerce clothing'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is ₱${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
