package models

type User struct {
	ID       int                   `json:"id"`
	Name     string                `json:"name" gorm:"type: varchar(255)"`
	Email    string                `json:"email" gorm:"type: varchar(255)"`
	Password string                `json:"password" gorm:"type: varchar(255)"`
	Phone    string                `json:"phone" gorm:"type: varchar(255)"`
	Address  string                `json:"address" gorm:"type: varchar(255)"`
	Journey  []JourneyUserResponse `json:"journey"`

	//journey post relasi from table journey post
}

// ==========for relation=================

type UsersResponse struct {
	ID      int    `json:"id"`
	Name    string `json:"name"`
	Email   string `json:"email"`
	Phone   string `json:"phone"`
	Address string `json:"address"`
}

func (UsersResponse) TableName() string {
	return "users"
}
