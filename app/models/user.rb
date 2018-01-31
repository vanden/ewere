class User < ApplicationRecord

  validates :username, :password, :email, presence:true
  validates :password, length: { minimum: 6 }
end
