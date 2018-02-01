class User < ApplicationRecord

  validates :username, :password_digest, :session_token, :email, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password   # Do I need this?

  # has_many :tasks
  # has_many :teams
  # has_many :projects
  # can I have may task and have many task through projects?


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    unless user then return nil end

    if user.is_password?(password) then return user end

    return nil
  end


  def password=(password)
    @password=password
    self.password_digest = BCrypt::Password.create(password)
  end


  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  private

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end


  def reset_session_token!
    self.session_token = generate_unique_session_token
    save!
    self.session_token
  end


  def generate_unique_session_token
    loop do
      self.session_token = SecureRandom::urlsafe_base64
      unless User.find_by(session_token: self.session_token) then break end
    end
    self.session_token
  end
end