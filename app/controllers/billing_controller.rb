class BillingController < ApplicationController
  def index
    @payment = Billing.generate rand(90)
  end
end
