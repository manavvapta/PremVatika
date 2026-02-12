// import React from "react";
// import "./BookingModal.css";

// export default function BookingModal({ data, onClose }) {
//   if (!data) return null;

//   return (
//     <div className="booking-overlay">
//       <div className="booking-modal">

//         <button className="close-btn" onClick={onClose}>×</button>

//         <h2 className="modal-title">Complete Your Booking</h2>

//         {/* PREVIEW */}
//         <div className="room-preview">
//           <img src={data.bimg || data.aimg || data.img} alt={data.title} />

//           <div className="room-details">
//             <h3>{data.title}</h3>
//             <p className="price">{data.price} {data.price ? <span>/ night</span> : null}</p>

//             <ul>
//               {data.size && <li><b>Size:</b> {data.size}</li>}
//               {data.capacity && <li><b>Capacity:</b> {data.capacity}</li>}
//               {data.bed && <li><b>Bed:</b> {data.bed}</li>}
//               {data.services && <li><b>Services:</b> {data.services}</li>}
//             </ul>
//           </div>
//         </div>

//         {/* BOOKING FORM */}
//         <form className="booking-form">
//           <div className="input-group">
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email Address" required />
//           </div>

//           <div className="input-group">
//             <input type="tel" placeholder="Mobile Number" required />
//             <select required>
//               <option value="">Guests</option>
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4+</option>
//             </select>
//           </div>

//           <div className="input-group">
//             <input type="date" required />
//             <input type="date" required />
//           </div>

//           <textarea placeholder="Special Requests (optional)"></textarea>

//           <button className="final-booking-btn" type="submit">
//             Confirm & Book Now
//           </button>
//         </form>

//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./BookingModal.css";

// export default function BookingModal({ data, onClose }) {
//   const [loading, setLoading] = useState(false);

//   if (!data) return null;

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Extract numeric price (e.g., from "₹1500" to 1500)
//       const amount = parseInt(data.price.replace(/[^0-9]/g, ""));

//       // 1. Create order on your backend
//       const orderResponse = await fetch("http://localhost:5000/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount, currency: "INR" }),
//       });

//       const orderData = await orderResponse.json();

//       if (!orderData.success) throw new Error("Order creation failed");

//       // 2. Initialize Razorpay Checkout
//       const options = {
//         key: orderData.key_id, 
//         amount: orderData.order.amount,
//         currency: orderData.order.currency,
//         name: "Hotel Prem Vatika",
//         description: `Booking for ${data.title}`,
//         order_id: orderData.order.id,
//         handler: async function (response) {
//           // 3. Verify payment on your backend
//           const verifyResponse = await fetch("http://localhost:5000/verify-payment", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             }),
//           });

//           const verifyData = await verifyResponse.json();
//           if (verifyData.success) {
//             alert("Booking & Payment Successful!");
//             onClose();
//           } else {
//             alert("Payment verification failed.");
//           }
//         },
//         prefill: {
//           name: e.target[0].value,
//           email: e.target[1].value,
//           contact: e.target[2].value,
//         },
//         theme: { color: "#3399cc" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("Something went wrong with the payment.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="booking-overlay">
//       <div className="booking-modal">
//         <button className="close-btn" onClick={onClose}>×</button>

//         <h2 className="modal-title">Complete Your Booking</h2>

//         {/* PREVIEW */}
//         <div className="room-preview">
//           <img src={data.bimg || data.aimg || data.img} alt={data.title} />

//           <div className="room-details">
//             <h3>{data.title}</h3>
//             <p className="price">{data.price} {data.price ? <span>/ night</span> : null}</p>

//             <ul>
//               {data.size && <li><b>Size:</b> {data.size}</li>}
//               {data.capacity && <li><b>Capacity:</b> {data.capacity}</li>}
//               {data.bed && <li><b>Bed:</b> {data.bed}</li>}
//               {data.services && <li><b>Services:</b> {data.services}</li>}
//             </ul>
//           </div>
//         </div>

//         {/* BOOKING FORM - Added onSubmit handler */}
//         <form className="booking-form" onSubmit={handlePayment}>
//           <div className="input-group">
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email Address" required />
//           </div>

//           <div className="input-group">
//             <input type="tel" placeholder="Mobile Number" required />
//             <select required>
//               <option value="">Guests</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4+</option>
//             </select>
//           </div>

//           <div className="input-group">
//             <input type="date" required />
//             <input type="date" required />
//           </div>

//           <textarea placeholder="Special Requests (optional)"></textarea>

//           {/* Button shows loading state when processing payment */}
//           <button className="final-booking-btn" type="submit" disabled={loading}>
//             {loading ? "Processing..." : "Confirm & Pay Now"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState, useMemo } from "react";
import "./BookingModal.css";

export default function BookingModal({ data, onClose }) {
  const [loading, setLoading] = useState(false);
  
  // State for dates to calculate dynamic pricing
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // Get today's date in YYYY-MM-DD format for the 'min' attribute
  const today = new Date().toISOString().split("T")[0];

  // Calculate dynamic price based on number of nights
  const totalAmount = useMemo(() => {
    if (!data || !data.price) return 0;
    const basePrice = parseInt(data.price.replace(/[^0-9]/g, ""));
    
    if (!checkIn || !checkOut) return basePrice;

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end - start;
    const diffNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Ensure at least 1 night is charged if checkout is same day or invalid
    return diffNights > 0 ? basePrice * diffNights : basePrice;
  }, [checkIn, checkOut, data]);

  if (!data) return null;

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Create order on backend with the dynamic totalAmount
      const orderRes = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount, currency: "INR" }),
      });

      const orderData = await orderRes.json();
      if (!orderData.success) throw new Error("Order creation failed");

      // 2. Razorpay Options
      const options = {
        key: orderData.key_id,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Hotel Prem Vatika",
        description: `Booking: ${data.title} for ${checkIn} to ${checkOut}`,
        order_id: orderData.order.id,
        handler: async function (response) {
          // Verify payment
          const verifyRes = await fetch("http://localhost:5000/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            alert("Booking & Payment Successful!");
            onClose();
          }
        },
        // NEW: Detection for modal close without payment
        modal: {
          ondismiss: function () {
            setLoading(false);
            alert("Payment Cancelled: You closed the window without completing the transaction.");
          },
        },
        prefill: {
          name: e.target[0].value,
          email: e.target[1].value,
          contact: e.target[2].value,
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert("Error: " + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="booking-overlay">
      <div className="booking-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="modal-title">Complete Your Booking</h2>

        <div className="room-preview">
          <img src={data.bimg || data.aimg || data.img} alt={data.title} />
          <div className="room-details">
            <h3>{data.title}</h3>
            {/* Show dynamic total price */}
            <p className="price">₹{totalAmount} <span>Total for stay</span></p>
          </div>
        </div>

        <form className="booking-form" onSubmit={handlePayment}>
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-group">
            <input type="tel" placeholder="Mobile Number" required />
            <select required>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
            </select>
          </div>

          <div className="input-group">
            {/* Added 'min' attribute and state binding */}
            <input 
              type="date" 
              min={today} 
              required 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <input 
              type="date" 
              min={checkIn || today} 
              required 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <button className="final-booking-btn" type="submit" disabled={loading}>
            {loading ? "Processing..." : `Pay ₹${totalAmount} & Book Now`}
          </button>
        </form>
      </div>
    </div>
  );
}