class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.integer :movie_db_id
      t.references :list, foreign_key: true

      t.timestamps
    end
  end
end
