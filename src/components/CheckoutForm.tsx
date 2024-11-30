import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

interface CheckoutFormProps {
  day: string;
  time: string;
  onClose: () => void;
  onSubmit: (event: React.FormEvent) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  day,
  time,
  onClose,
  onSubmit,
}) => {
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    return () => {
      const cardElement = elements?.getElement(CardNumberElement);
      if (cardElement) {
        cardElement.destroy();
      }
    };
  }, [elements]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!stripe || !elements) {
      console.error("Stripe.js has not yet loaded.");
      setIsSubmitting(false);
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    if (!cardElement) {
      console.error("Card element not found.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://bitescreadoresdesonrisas.com/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 5000 }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        throw new Error("Missing client secret");
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );

      if (error) {
        console.error(error);
      } else {
        console.log(paymentIntent);
        onClose();
        onSubmit(event);
      }
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
        <img src="/bites_logo.png" alt="Logo" className="mx-auto w-full" />
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-700">
            {t("stripe.Reservar")}{" "}
          </h2>
          <p className="text-gray-800 font-semibold">$50.00 USD</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-700">
            {t("stripe.Hora")}
          </h2>
          <p className="text-gray-800 font-semibold">{day}</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-700">
            {t("stripe.Fecha")}
          </h2>
          <p className="text-gray-800 font-semibold">{time}</p>
        </div>
        <hr className="w-full border border-gray-500 mb-4" />
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div className="col-span-2 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="card-number-element"
            >
              {t("stripe.Numero")}{" "}
            </label>
            <div className="p-2 border border-gray-300 rounded">
              <CardNumberElement
                id="card-number-element"
                options={CARD_ELEMENT_OPTIONS}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="card-expiry-element"
            >
              {t("stripe.Vencimiento")}
            </label>
            <div className="p-2 border border-gray-300 rounded">
              <CardExpiryElement
                id="card-expiry-element"
                options={CARD_ELEMENT_OPTIONS}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="card-cvc-element"
            >
              CVC
            </label>
            <div className="p-2 border border-gray-300 rounded">
              <CardCvcElement
                id="card-cvc-element"
                options={CARD_ELEMENT_OPTIONS}
              />
            </div>
          </div>
          <div className="col-span-2">
            <button
              className="bg-[#FE81BD] text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("stripe.Procesando") : t("stripe.Pagar")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
