package models

import "time"

type Journey struct {
	ID          int                `json:"id" gorm:"primary_key:auto_increment"`
	User        UsersResponse      `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	Title       string             `json:"title" form:"title" gorm:"type: varchar(255)"`
	Description string             `json:"description" form:"description" gorm:"type: varchar(255)"`
	Image       string             `json:"image" form:"image" gorm:"type: varchar(255)"`
	CreatedAt   time.Time          `json:"created_at"`
	UpdatedAt   time.Time          `json:"update_at"`
	UserID      int                `json:"user_id" form:"user_id"`
	Bookmark    []BookmarkResponse `json:"bookmark" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}

type JourneyResponse struct {
	ID          int           `json:"id"`
	UserID      int           `json:"-"`
	User        UsersResponse `json:"user"`
	Title       string        `json:"title"`
	Description string        `json:"description"`
	Image       string        `json:"image"`
	CreatedAt   time.Time     `json:"created_at"`
	UpdatedAt   time.Time     `json:"update_at"`
}

type JourneyUserResponse struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	UserID      int    `json:"-"`
}

func (JourneyResponse) TableName() string {
	return "journeys"
}

func (JourneyUserResponse) TableName() string {
	return "journeys"
}
