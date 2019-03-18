class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.belongs_to :menu, foreign_key: true
      t.string :name
      t.string :price

      t.timestamps
    end
  end
end
