# Payment Merchants

Although your application may only require a single merchant, with Payavel you can easily configure multiple merchants to process payments via one or more payment providers.

## Adding Merchants

After setting up a new merchant account with your PSP you will need to update your `config/payment.php` file reflecting these changes.

```php

[
    'defaults' => [
        'driver' => 'config',
        'provider' => 'adyen',
        'merchant' => 'company_usd',
    ],

    'merchants' => [

        'company_usd' => [
            'name' => 'Company USD',
            'providers' => [
                'adyen' => [
                    'merchant_account' => env('COMPANY_USD_ADYEN_MERCHANT_ACCOUNT'),
                    'checkout_api_key' => env('COMPANY_USD_ADYEN_CHECKOUT_API_KEY'),
                    'endpoint' => env('COMPANY_USD_ADYEN_CHECKOUT_ENDPOINT'),
                    'currency' => 'USD',
                ],
            ],
        ],

        'company_eur' => [
            'name' => 'Company EUR',
            'providers' => [
                'adyen' => [
                    'merchant_account' => env('COMPANY_EUR_ADYEN_MERCHANT_ACCOUNT'),
                    'checkout_api_key' => env('COMPANY_EUR_ADYEN_CHECKOUT_API_KEY'),
                    'endpoint' => env('COMPANY_EUR_ADYEN_CHECKOUT_ENDPOINT'),
                    'currency' => 'EUR',
                ],
            ],
        ],

    ],
]

```

In the example I decided to separate my merchant accounts by currency. By doing this, Adyen has provided us with different environment variables to route the requests into the right merchant account. Your job is to route your customers into the expected merchant account.

```php

use Payavel\Checkout\Facades\Payment;

if ($customer->isEuropean()) {
    Payment::setMerchant('company_eur');
}

// Collect the payment.

```
