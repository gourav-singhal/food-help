json.set! business.id do
  json.extract! business, :id, :name, :neighbourhood, :address, :city, :state, :latitude, :longitude, :price
  json.rating 4.5
end