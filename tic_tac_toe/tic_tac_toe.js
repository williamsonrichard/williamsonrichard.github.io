use_cross = true

function toggle_cross_and_o() {
  use_cross = !use_cross
}

function begin_with_cross() {
  use_cross = true
}

function take_turn(x,y) {
  if (have_won() == true) {
    return
  }
  clicked_on_cell = document.getElementById("(" + x.toString() + "," + y.toString() + ")") //Fetch the cell that was clicked on
  if (clicked_on_cell.textContent != "") {
    return
  }
  if (use_cross == true) {
    style_class = "cross"
    content = "X"
  } else {
    style_class = "o"
    content = "O"
  }
  toggle_cross_and_o()
  clicked_on_cell.textContent = content //Set cell to show X or O
  clicked_on_cell.classList.add(style_class) //Set style to cross or o.
  if (have_won() == true) {
    toggle_winning_text(true)
    toggle_visibility_of_play_again_button(true)
  } else if (all_squares_used()) {
    toggle_draw_text(true)
    toggle_visibility_of_play_again_button(true)
  }
}

function have_won() {
  possibilities = [ "X", "O"]
  for (cross_or_o_index in possibilities) {
    cross_or_o = possibilities[cross_or_o_index]
    first_column_all_same = (document.getElementById("(1,1)").textContent == cross_or_o)
      && (document.getElementById("(2,1)").textContent == cross_or_o)
      && (document.getElementById("(3,1)").textContent == cross_or_o)
    if (first_column_all_same == true) {
      return true
    }
    second_column_all_same = (document.getElementById("(1,2)").textContent == cross_or_o)
      && (document.getElementById("(2,2)").textContent == cross_or_o)
      && (document.getElementById("(3,2)").textContent == cross_or_o)
    if (second_column_all_same == true) {
      return true
    }
    third_column_all_same = (document.getElementById("(1,3)").textContent == cross_or_o)
      && (document.getElementById("(2,3)").textContent == cross_or_o)
      && (document.getElementById("(3,3)").textContent == cross_or_o)
    if (third_column_all_same == true) {
      return true
    }
    first_row_all_same = (document.getElementById("(1,1)").textContent == cross_or_o)
      && (document.getElementById("(1,2)").textContent == cross_or_o)
      && (document.getElementById("(1,3)").textContent == cross_or_o)
    if (first_row_all_same == true) {
      return true
    }
    second_row_all_same = (document.getElementById("(2,1)").textContent == cross_or_o)
      && (document.getElementById("(2,2)").textContent == cross_or_o)
      && (document.getElementById("(2,3)").textContent == cross_or_o)
    if (second_row_all_same == true) {
      return true
    }
    third_row_all_same = (document.getElementById("(3,1)").textContent == cross_or_o)
      && (document.getElementById("(3,2)").textContent == cross_or_o)
      && (document.getElementById("(3,3)").textContent == cross_or_o)
    if (third_row_all_same == true) {
      return true
    }
    top_left_to_bottom_right_diagonal_all_same = (document.getElementById("(1,1)").textContent == cross_or_o)
      && (document.getElementById("(2,2)").textContent == cross_or_o)
      && (document.getElementById("(3,3)").textContent == cross_or_o)
    if (top_left_to_bottom_right_diagonal_all_same == true) {
      return true
    }
    bottom_left_to_top_right_diagonal_all_same = (document.getElementById("(3,1)").textContent == cross_or_o)
      && (document.getElementById("(2,2)").textContent == cross_or_o)
      && (document.getElementById("(1,3)").textContent == cross_or_o)
    if (bottom_left_to_top_right_diagonal_all_same == true) {
      return true
    }
  }
}

function toggle_winning_text(should_show) {
  winning_element = document.getElementById("winning_text") //Fetch paragraph which winning text will be put in
  if (should_show == true) {
    winning_element.style.display = "block"
  } else {
    winning_element.style.display = "none"
  }
}

function toggle_draw_text(should_show) {
  draw_element = document.getElementById("draw_text") //Fetch paragraph which draw text will be put in
  if (should_show == true) {
    draw_element.style.display = "block"
  } else {
    draw_element.style.display = "none"
  }
}

function toggle_visibility_of_play_again_button(should_show) {
  play_again_button = document.getElementById("play_again_button")
  if (should_show == true) {
    play_again_button.style.display = "block" // Make it visible
  } else {
    play_again_button.style.display = "none" // Make it invisible
  }
}

function all_squares_used() {
  x_coordinates = [1, 2, 3]
  y_coordinates = [1, 2, 3]
  for (x_index in x_coordinates) {
    for (y_index in y_coordinates) {
      x = x_coordinates[x_index]
      y = y_coordinates[y_index]
      cell = document.getElementById("(" + x.toString() + "," + y.toString() + ")")
      if (cell.textContent == "") {
        return false
      }
    }
  }
  return true
}

function clear_board() {
  x_coordinates = [1, 2, 3]
  y_coordinates = [1, 2, 3]
  for (x_index in x_coordinates) {
    for (y_index in y_coordinates) {
       x = x_coordinates[x_index]
       y = y_coordinates[y_index]
       cell = document.getElementById("(" + x.toString() + "," + y.toString() + ")")
       cell.textContent = "" //Set cell content to be empty
       cell.classList = []
    }
  }
  toggle_visibility_of_play_again_button(false)
  toggle_winning_text(false)
  toggle_draw_text(false)
  begin_with_cross()
}
