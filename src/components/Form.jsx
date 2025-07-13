import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Spinner from "./Spinner";
import Message from "./Message";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const navigate = useNavigate();
  const { createCity } = useCities();
  const [lat, lng] = useUrlPosition();
  const [isLoading, setIsLoading] = useState(false);
  const [geoCodingError, setGeoCodingError] = useState("");
  const [formData, setFormData] = useState({
    cityName: "",
    country: "",
    state: "",
    emoji: "",
    date: new Date(),
    notes: ""
  });

  useEffect(() => {
    if (!lat && !lng) return;

    const fetchLocationData = async () => {
      try { 
        setIsLoading(true);
        setGeoCodingError("");
        
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();

        if (!data.countryCode) throw new Error("Not a city. Click elsewhere 😉");

        setFormData(prev => ({
          ...prev,
          cityName: data.city || data.locality || "",
          country: data.countryName,
          state: data.principalSubdivision || data.region || "",
          emoji: convertToEmoji(data.countryCode)
        }));
      } catch (err) {
        setGeoCodingError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocationData();
  }, [lat, lng]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleDateChange = (e) => {
    setFormData(prev => ({ ...prev, date: new Date(e.target.value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.cityName) return;

    const newCity = {
      ...formData,
      date: formData.date.toISOString(),
      position: { lat: Number(lat), lng: Number(lng) }
    };

    try {
      setIsLoading(true);
      await createCity(newCity);
      navigate("/app/cities");
    } catch (err) {
      alert("Error creating city: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Spinner />;
  if (geoCodingError) return <Message message={geoCodingError} />;
  if (!lat || !lng) return <Message message="Click on the map first" />;

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-8 my-8 bg-dark-2 rounded-xl shadow-lg border border-blue-500/20">
      <h1 className="text-2xl font-bold mb-6 text-blue-100">Add New City</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          {/* City Name */}
          <div>
            <label htmlFor="cityName" className="block text-sm font-medium mb-1 text-blue-200">
              City name
            </label>
            <div className="flex items-center gap-2">
              <input
                id="cityName"
                type="text"
                value={formData.cityName}
                onChange={handleChange}
                className="w-full p-2 rounded bg-dark-3 border border-blue-500/30 text-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
                required
              />
              <span className="text-2xl">{formData.emoji}</span>
            </div>
          </div>

          {/* Location Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-1 text-blue-200">State/Province</p>
              <div className="p-2 rounded bg-dark-3 border border-blue-500/30 text-blue-100">
                {formData.state || "N/A"}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-1 text-blue-200">Country</p>
              <div className="p-2 rounded bg-dark-3 border border-blue-500/30 text-blue-100">
                {formData.country || "N/A"}
              </div>
            </div>
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1 text-blue-200">
              When did you visit {formData.cityName || "this city"}?
            </label>
            <input
              id="date"
              type="date"
              value={formData.date.toISOString().split("T")[0]}
              onChange={handleDateChange}
              className="w-full p-2 rounded bg-dark-3 border border-blue-500/30 text-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
              required
            />
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="notes" className="block text-sm font-medium mb-1 text-blue-200">
              Notes about your trip
            </label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 rounded bg-dark-3 border border-blue-500/30 text-blue-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <Button
              type="back"
              onClick={() => navigate(-1)}
              style="secondary"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add City"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;