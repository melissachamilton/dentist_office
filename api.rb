require "stripe"
Stripe.api_key = "sk_test_DuEv6rLjR1KDP2TA4yJdwDh8"

Stripe::Charge.retrieve({ :id => "ch_1DVi5jCcun972ItxhShlka5C", :expand => ['customer'] })